﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test
{
    using ICSSoft.STORMNET;


    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// New class2.
    /// </summary>
    // *** Start programmer edit section *** (NewClass2 CustomAttributes)

    // *** End programmer edit section *** (NewClass2 CustomAttributes)
    [AutoAltered()]
    [Caption("New class2")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("NewClass2E", new string[] {
            "asd2 as \'Asd2\'",
            "NewClass1 as \'New class1\'",
            "NewClass1.asd as \'Asd\'"}, Hidden=new string[] {
            "NewClass1.asd"})]
    [AssociatedDetailViewAttribute("NewClass2E", "NewClass3", "NewClass3E", true, "", "New class3", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("NewClass2E", "NewClass1", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "asd")]
    [View("NewClass2L", new string[] {
            "asd2 as \'Asd2\'",
            "NewClass1.asd as \'Asd\'"})]
    public class NewClass2 : ICSSoft.STORMNET.DataObject
    {

        private bool fasd2;

        private IIS.Test.NewClass1 fNewClass1;

        private IIS.Test.DetailArrayOfNewClass3 fNewClass3;

        // *** Start programmer edit section *** (NewClass2 CustomMembers)

        // *** End programmer edit section *** (NewClass2 CustomMembers)


        /// <summary>
        /// asd2.
        /// </summary>
        // *** Start programmer edit section *** (NewClass2.asd2 CustomAttributes)

        // *** End programmer edit section *** (NewClass2.asd2 CustomAttributes)
        public virtual bool asd2
        {
            get
            {
                // *** Start programmer edit section *** (NewClass2.asd2 Get start)

                // *** End programmer edit section *** (NewClass2.asd2 Get start)
                bool result = this.fasd2;
                // *** Start programmer edit section *** (NewClass2.asd2 Get end)

                // *** End programmer edit section *** (NewClass2.asd2 Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (NewClass2.asd2 Set start)

                // *** End programmer edit section *** (NewClass2.asd2 Set start)
                this.fasd2 = value;
                // *** Start programmer edit section *** (NewClass2.asd2 Set end)

                // *** End programmer edit section *** (NewClass2.asd2 Set end)
            }
        }

        /// <summary>
        /// New class2.
        /// </summary>
        // *** Start programmer edit section *** (NewClass2.NewClass1 CustomAttributes)

        // *** End programmer edit section *** (NewClass2.NewClass1 CustomAttributes)
        [PropertyStorage(new string[] {
                "NewClass1"})]
        [NotNull()]
        public virtual IIS.Test.NewClass1 NewClass1
        {
            get
            {
                // *** Start programmer edit section *** (NewClass2.NewClass1 Get start)

                // *** End programmer edit section *** (NewClass2.NewClass1 Get start)
                IIS.Test.NewClass1 result = this.fNewClass1;
                // *** Start programmer edit section *** (NewClass2.NewClass1 Get end)

                // *** End programmer edit section *** (NewClass2.NewClass1 Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (NewClass2.NewClass1 Set start)

                // *** End programmer edit section *** (NewClass2.NewClass1 Set start)
                this.fNewClass1 = value;
                // *** Start programmer edit section *** (NewClass2.NewClass1 Set end)

                // *** End programmer edit section *** (NewClass2.NewClass1 Set end)
            }
        }

        /// <summary>
        /// New class2.
        /// </summary>
        // *** Start programmer edit section *** (NewClass2.NewClass3 CustomAttributes)

        // *** End programmer edit section *** (NewClass2.NewClass3 CustomAttributes)
        public virtual IIS.Test.DetailArrayOfNewClass3 NewClass3
        {
            get
            {
                // *** Start programmer edit section *** (NewClass2.NewClass3 Get start)

                // *** End programmer edit section *** (NewClass2.NewClass3 Get start)
                if ((this.fNewClass3 == null))
                {
                    this.fNewClass3 = new IIS.Test.DetailArrayOfNewClass3(this);
                }
                IIS.Test.DetailArrayOfNewClass3 result = this.fNewClass3;
                // *** Start programmer edit section *** (NewClass2.NewClass3 Get end)

                // *** End programmer edit section *** (NewClass2.NewClass3 Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (NewClass2.NewClass3 Set start)

                // *** End programmer edit section *** (NewClass2.NewClass3 Set start)
                this.fNewClass3 = value;
                // *** Start programmer edit section *** (NewClass2.NewClass3 Set end)

                // *** End programmer edit section *** (NewClass2.NewClass3 Set end)
            }
        }

        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {

            /// <summary>
            /// "NewClass2E" view.
            /// </summary>
            public static ICSSoft.STORMNET.View NewClass2E
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("NewClass2E", typeof(IIS.Test.NewClass2));
                }
            }

            /// <summary>
            /// "NewClass2L" view.
            /// </summary>
            public static ICSSoft.STORMNET.View NewClass2L
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("NewClass2L", typeof(IIS.Test.NewClass2));
                }
            }
        }
    }
}

