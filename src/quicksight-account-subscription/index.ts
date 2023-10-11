// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuicksightAccountSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#account_name QuicksightAccountSubscription#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#active_directory_name QuicksightAccountSubscription#active_directory_name}
  */
  readonly activeDirectoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#admin_group QuicksightAccountSubscription#admin_group}
  */
  readonly adminGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#authentication_method QuicksightAccountSubscription#authentication_method}
  */
  readonly authenticationMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#author_group QuicksightAccountSubscription#author_group}
  */
  readonly authorGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#aws_account_id QuicksightAccountSubscription#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#contact_number QuicksightAccountSubscription#contact_number}
  */
  readonly contactNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#directory_id QuicksightAccountSubscription#directory_id}
  */
  readonly directoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#edition QuicksightAccountSubscription#edition}
  */
  readonly edition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#email_address QuicksightAccountSubscription#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#first_name QuicksightAccountSubscription#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#id QuicksightAccountSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#last_name QuicksightAccountSubscription#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#notification_email QuicksightAccountSubscription#notification_email}
  */
  readonly notificationEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#reader_group QuicksightAccountSubscription#reader_group}
  */
  readonly readerGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#realm QuicksightAccountSubscription#realm}
  */
  readonly realm?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#timeouts QuicksightAccountSubscription#timeouts}
  */
  readonly timeouts?: QuicksightAccountSubscriptionTimeouts;
}
export interface QuicksightAccountSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#create QuicksightAccountSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#delete QuicksightAccountSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription#read QuicksightAccountSubscription#read}
  */
  readonly read?: string;
}

export function quicksightAccountSubscriptionTimeoutsToTerraform(struct?: QuicksightAccountSubscriptionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class QuicksightAccountSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QuicksightAccountSubscriptionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QuicksightAccountSubscriptionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription aws_quicksight_account_subscription}
*/
export class QuicksightAccountSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_account_subscription";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/quicksight_account_subscription aws_quicksight_account_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightAccountSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightAccountSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_account_subscription',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._activeDirectoryName = config.activeDirectoryName;
    this._adminGroup = config.adminGroup;
    this._authenticationMethod = config.authenticationMethod;
    this._authorGroup = config.authorGroup;
    this._awsAccountId = config.awsAccountId;
    this._contactNumber = config.contactNumber;
    this._directoryId = config.directoryId;
    this._edition = config.edition;
    this._emailAddress = config.emailAddress;
    this._firstName = config.firstName;
    this._id = config.id;
    this._lastName = config.lastName;
    this._notificationEmail = config.notificationEmail;
    this._readerGroup = config.readerGroup;
    this._realm = config.realm;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // account_subscription_status - computed: true, optional: false, required: false
  public get accountSubscriptionStatus() {
    return this.getStringAttribute('account_subscription_status');
  }

  // active_directory_name - computed: false, optional: true, required: false
  private _activeDirectoryName?: string; 
  public get activeDirectoryName() {
    return this.getStringAttribute('active_directory_name');
  }
  public set activeDirectoryName(value: string) {
    this._activeDirectoryName = value;
  }
  public resetActiveDirectoryName() {
    this._activeDirectoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryNameInput() {
    return this._activeDirectoryName;
  }

  // admin_group - computed: false, optional: true, required: false
  private _adminGroup?: string[]; 
  public get adminGroup() {
    return this.getListAttribute('admin_group');
  }
  public set adminGroup(value: string[]) {
    this._adminGroup = value;
  }
  public resetAdminGroup() {
    this._adminGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminGroupInput() {
    return this._adminGroup;
  }

  // authentication_method - computed: false, optional: false, required: true
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // author_group - computed: false, optional: true, required: false
  private _authorGroup?: string[]; 
  public get authorGroup() {
    return this.getListAttribute('author_group');
  }
  public set authorGroup(value: string[]) {
    this._authorGroup = value;
  }
  public resetAuthorGroup() {
    this._authorGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorGroupInput() {
    return this._authorGroup;
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // contact_number - computed: false, optional: true, required: false
  private _contactNumber?: string; 
  public get contactNumber() {
    return this.getStringAttribute('contact_number');
  }
  public set contactNumber(value: string) {
    this._contactNumber = value;
  }
  public resetContactNumber() {
    this._contactNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactNumberInput() {
    return this._contactNumber;
  }

  // directory_id - computed: false, optional: true, required: false
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // edition - computed: false, optional: false, required: true
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // notification_email - computed: false, optional: false, required: true
  private _notificationEmail?: string; 
  public get notificationEmail() {
    return this.getStringAttribute('notification_email');
  }
  public set notificationEmail(value: string) {
    this._notificationEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailInput() {
    return this._notificationEmail;
  }

  // reader_group - computed: false, optional: true, required: false
  private _readerGroup?: string[]; 
  public get readerGroup() {
    return this.getListAttribute('reader_group');
  }
  public set readerGroup(value: string[]) {
    this._readerGroup = value;
  }
  public resetReaderGroup() {
    this._readerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readerGroupInput() {
    return this._readerGroup;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new QuicksightAccountSubscriptionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: QuicksightAccountSubscriptionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      active_directory_name: cdktf.stringToTerraform(this._activeDirectoryName),
      admin_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adminGroup),
      authentication_method: cdktf.stringToTerraform(this._authenticationMethod),
      author_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorGroup),
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      contact_number: cdktf.stringToTerraform(this._contactNumber),
      directory_id: cdktf.stringToTerraform(this._directoryId),
      edition: cdktf.stringToTerraform(this._edition),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      first_name: cdktf.stringToTerraform(this._firstName),
      id: cdktf.stringToTerraform(this._id),
      last_name: cdktf.stringToTerraform(this._lastName),
      notification_email: cdktf.stringToTerraform(this._notificationEmail),
      reader_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readerGroup),
      realm: cdktf.stringToTerraform(this._realm),
      timeouts: quicksightAccountSubscriptionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
