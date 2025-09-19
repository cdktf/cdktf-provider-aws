# `quicksightAccountSubscription` Submodule <a name="`quicksightAccountSubscription` Submodule" id="@cdktf/provider-aws.quicksightAccountSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightAccountSubscription <a name="QuicksightAccountSubscription" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription aws_quicksight_account_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_account_subscription

quicksightAccountSubscription.QuicksightAccountSubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  authentication_method: str,
  edition: str,
  notification_email: str,
  active_directory_name: str = None,
  admin_group: typing.List[str] = None,
  author_group: typing.List[str] = None,
  aws_account_id: str = None,
  contact_number: str = None,
  directory_id: str = None,
  email_address: str = None,
  first_name: str = None,
  iam_identity_center_instance_arn: str = None,
  id: str = None,
  last_name: str = None,
  reader_group: typing.List[str] = None,
  realm: str = None,
  region: str = None,
  timeouts: QuicksightAccountSubscriptionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#account_name QuicksightAccountSubscription#account_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.authenticationMethod">authentication_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#authentication_method QuicksightAccountSubscription#authentication_method}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.edition">edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#edition QuicksightAccountSubscription#edition}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.notificationEmail">notification_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#notification_email QuicksightAccountSubscription#notification_email}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.activeDirectoryName">active_directory_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#active_directory_name QuicksightAccountSubscription#active_directory_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.adminGroup">admin_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#admin_group QuicksightAccountSubscription#admin_group}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.authorGroup">author_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#author_group QuicksightAccountSubscription#author_group}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#aws_account_id QuicksightAccountSubscription#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.contactNumber">contact_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#contact_number QuicksightAccountSubscription#contact_number}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#directory_id QuicksightAccountSubscription#directory_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.emailAddress">email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#email_address QuicksightAccountSubscription#email_address}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#first_name QuicksightAccountSubscription#first_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.iamIdentityCenterInstanceArn">iam_identity_center_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#iam_identity_center_instance_arn QuicksightAccountSubscription#iam_identity_center_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#id QuicksightAccountSubscription#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#last_name QuicksightAccountSubscription#last_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.readerGroup">reader_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#reader_group QuicksightAccountSubscription#reader_group}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.realm">realm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#realm QuicksightAccountSubscription#realm}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.accountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#account_name QuicksightAccountSubscription#account_name}.

---

##### `authentication_method`<sup>Required</sup> <a name="authentication_method" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.authenticationMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#authentication_method QuicksightAccountSubscription#authentication_method}.

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.edition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#edition QuicksightAccountSubscription#edition}.

---

##### `notification_email`<sup>Required</sup> <a name="notification_email" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.notificationEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#notification_email QuicksightAccountSubscription#notification_email}.

---

##### `active_directory_name`<sup>Optional</sup> <a name="active_directory_name" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.activeDirectoryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#active_directory_name QuicksightAccountSubscription#active_directory_name}.

---

##### `admin_group`<sup>Optional</sup> <a name="admin_group" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.adminGroup"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#admin_group QuicksightAccountSubscription#admin_group}.

---

##### `author_group`<sup>Optional</sup> <a name="author_group" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.authorGroup"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#author_group QuicksightAccountSubscription#author_group}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#aws_account_id QuicksightAccountSubscription#aws_account_id}.

---

##### `contact_number`<sup>Optional</sup> <a name="contact_number" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.contactNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#contact_number QuicksightAccountSubscription#contact_number}.

---

##### `directory_id`<sup>Optional</sup> <a name="directory_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#directory_id QuicksightAccountSubscription#directory_id}.

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.emailAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#email_address QuicksightAccountSubscription#email_address}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.firstName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#first_name QuicksightAccountSubscription#first_name}.

---

##### `iam_identity_center_instance_arn`<sup>Optional</sup> <a name="iam_identity_center_instance_arn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.iamIdentityCenterInstanceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#iam_identity_center_instance_arn QuicksightAccountSubscription#iam_identity_center_instance_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#id QuicksightAccountSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.lastName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#last_name QuicksightAccountSubscription#last_name}.

---

##### `reader_group`<sup>Optional</sup> <a name="reader_group" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.readerGroup"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#reader_group QuicksightAccountSubscription#reader_group}.

---

##### `realm`<sup>Optional</sup> <a name="realm" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.realm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#realm QuicksightAccountSubscription#realm}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#region QuicksightAccountSubscription#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#timeouts QuicksightAccountSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetActiveDirectoryName">reset_active_directory_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAdminGroup">reset_admin_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAuthorGroup">reset_author_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetContactNumber">reset_contact_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetDirectoryId">reset_directory_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetEmailAddress">reset_email_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetIamIdentityCenterInstanceArn">reset_iam_identity_center_instance_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetReaderGroup">reset_reader_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetRealm">reset_realm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#create QuicksightAccountSubscription#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#delete QuicksightAccountSubscription#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#read QuicksightAccountSubscription#read}.

---

##### `reset_active_directory_name` <a name="reset_active_directory_name" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetActiveDirectoryName"></a>

```python
def reset_active_directory_name() -> None
```

##### `reset_admin_group` <a name="reset_admin_group" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAdminGroup"></a>

```python
def reset_admin_group() -> None
```

##### `reset_author_group` <a name="reset_author_group" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAuthorGroup"></a>

```python
def reset_author_group() -> None
```

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_contact_number` <a name="reset_contact_number" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetContactNumber"></a>

```python
def reset_contact_number() -> None
```

##### `reset_directory_id` <a name="reset_directory_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetDirectoryId"></a>

```python
def reset_directory_id() -> None
```

##### `reset_email_address` <a name="reset_email_address" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetEmailAddress"></a>

```python
def reset_email_address() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_iam_identity_center_instance_arn` <a name="reset_iam_identity_center_instance_arn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetIamIdentityCenterInstanceArn"></a>

```python
def reset_iam_identity_center_instance_arn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_reader_group` <a name="reset_reader_group" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetReaderGroup"></a>

```python
def reset_reader_group() -> None
```

##### `reset_realm` <a name="reset_realm" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetRealm"></a>

```python
def reset_realm() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a QuicksightAccountSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_account_subscription

quicksightAccountSubscription.QuicksightAccountSubscription.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_account_subscription

quicksightAccountSubscription.QuicksightAccountSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_account_subscription

quicksightAccountSubscription.QuicksightAccountSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_account_subscription

quicksightAccountSubscription.QuicksightAccountSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a QuicksightAccountSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuicksightAccountSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuicksightAccountSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightAccountSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountSubscriptionStatus">account_subscription_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference">QuicksightAccountSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryNameInput">active_directory_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroupInput">admin_group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethodInput">authentication_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroupInput">author_group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumberInput">contact_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.editionInput">edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.iamIdentityCenterInstanceArnInput">iam_identity_center_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmailInput">notification_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroupInput">reader_group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realmInput">realm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryName">active_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroup">admin_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethod">authentication_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroup">author_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumber">contact_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.iamIdentityCenterInstanceArn">iam_identity_center_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmail">notification_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroup">reader_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realm">realm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_subscription_status`<sup>Required</sup> <a name="account_subscription_status" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountSubscriptionStatus"></a>

```python
account_subscription_status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeouts"></a>

```python
timeouts: QuicksightAccountSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference">QuicksightAccountSubscriptionTimeoutsOutputReference</a>

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `active_directory_name_input`<sup>Optional</sup> <a name="active_directory_name_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryNameInput"></a>

```python
active_directory_name_input: str
```

- *Type:* str

---

##### `admin_group_input`<sup>Optional</sup> <a name="admin_group_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroupInput"></a>

```python
admin_group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authentication_method_input`<sup>Optional</sup> <a name="authentication_method_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethodInput"></a>

```python
authentication_method_input: str
```

- *Type:* str

---

##### `author_group_input`<sup>Optional</sup> <a name="author_group_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroupInput"></a>

```python
author_group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `contact_number_input`<sup>Optional</sup> <a name="contact_number_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumberInput"></a>

```python
contact_number_input: str
```

- *Type:* str

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `edition_input`<sup>Optional</sup> <a name="edition_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.editionInput"></a>

```python
edition_input: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `iam_identity_center_instance_arn_input`<sup>Optional</sup> <a name="iam_identity_center_instance_arn_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.iamIdentityCenterInstanceArnInput"></a>

```python
iam_identity_center_instance_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `notification_email_input`<sup>Optional</sup> <a name="notification_email_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmailInput"></a>

```python
notification_email_input: str
```

- *Type:* str

---

##### `reader_group_input`<sup>Optional</sup> <a name="reader_group_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroupInput"></a>

```python
reader_group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `realm_input`<sup>Optional</sup> <a name="realm_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realmInput"></a>

```python
realm_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, QuicksightAccountSubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `active_directory_name`<sup>Required</sup> <a name="active_directory_name" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.activeDirectoryName"></a>

```python
active_directory_name: str
```

- *Type:* str

---

##### `admin_group`<sup>Required</sup> <a name="admin_group" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.adminGroup"></a>

```python
admin_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authentication_method`<sup>Required</sup> <a name="authentication_method" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authenticationMethod"></a>

```python
authentication_method: str
```

- *Type:* str

---

##### `author_group`<sup>Required</sup> <a name="author_group" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.authorGroup"></a>

```python
author_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `contact_number`<sup>Required</sup> <a name="contact_number" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.contactNumber"></a>

```python
contact_number: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `iam_identity_center_instance_arn`<sup>Required</sup> <a name="iam_identity_center_instance_arn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.iamIdentityCenterInstanceArn"></a>

```python
iam_identity_center_instance_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `notification_email`<sup>Required</sup> <a name="notification_email" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.notificationEmail"></a>

```python
notification_email: str
```

- *Type:* str

---

##### `reader_group`<sup>Required</sup> <a name="reader_group" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.readerGroup"></a>

```python
reader_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.realm"></a>

```python
realm: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightAccountSubscriptionConfig <a name="QuicksightAccountSubscriptionConfig" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_account_subscription

quicksightAccountSubscription.QuicksightAccountSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  authentication_method: str,
  edition: str,
  notification_email: str,
  active_directory_name: str = None,
  admin_group: typing.List[str] = None,
  author_group: typing.List[str] = None,
  aws_account_id: str = None,
  contact_number: str = None,
  directory_id: str = None,
  email_address: str = None,
  first_name: str = None,
  iam_identity_center_instance_arn: str = None,
  id: str = None,
  last_name: str = None,
  reader_group: typing.List[str] = None,
  realm: str = None,
  region: str = None,
  timeouts: QuicksightAccountSubscriptionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#account_name QuicksightAccountSubscription#account_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authenticationMethod">authentication_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#authentication_method QuicksightAccountSubscription#authentication_method}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.edition">edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#edition QuicksightAccountSubscription#edition}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.notificationEmail">notification_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#notification_email QuicksightAccountSubscription#notification_email}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.activeDirectoryName">active_directory_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#active_directory_name QuicksightAccountSubscription#active_directory_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.adminGroup">admin_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#admin_group QuicksightAccountSubscription#admin_group}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authorGroup">author_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#author_group QuicksightAccountSubscription#author_group}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#aws_account_id QuicksightAccountSubscription#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.contactNumber">contact_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#contact_number QuicksightAccountSubscription#contact_number}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#directory_id QuicksightAccountSubscription#directory_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.emailAddress">email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#email_address QuicksightAccountSubscription#email_address}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#first_name QuicksightAccountSubscription#first_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.iamIdentityCenterInstanceArn">iam_identity_center_instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#iam_identity_center_instance_arn QuicksightAccountSubscription#iam_identity_center_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#id QuicksightAccountSubscription#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#last_name QuicksightAccountSubscription#last_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.readerGroup">reader_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#reader_group QuicksightAccountSubscription#reader_group}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.realm">realm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#realm QuicksightAccountSubscription#realm}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#account_name QuicksightAccountSubscription#account_name}.

---

##### `authentication_method`<sup>Required</sup> <a name="authentication_method" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authenticationMethod"></a>

```python
authentication_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#authentication_method QuicksightAccountSubscription#authentication_method}.

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.edition"></a>

```python
edition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#edition QuicksightAccountSubscription#edition}.

---

##### `notification_email`<sup>Required</sup> <a name="notification_email" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.notificationEmail"></a>

```python
notification_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#notification_email QuicksightAccountSubscription#notification_email}.

---

##### `active_directory_name`<sup>Optional</sup> <a name="active_directory_name" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.activeDirectoryName"></a>

```python
active_directory_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#active_directory_name QuicksightAccountSubscription#active_directory_name}.

---

##### `admin_group`<sup>Optional</sup> <a name="admin_group" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.adminGroup"></a>

```python
admin_group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#admin_group QuicksightAccountSubscription#admin_group}.

---

##### `author_group`<sup>Optional</sup> <a name="author_group" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.authorGroup"></a>

```python
author_group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#author_group QuicksightAccountSubscription#author_group}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#aws_account_id QuicksightAccountSubscription#aws_account_id}.

---

##### `contact_number`<sup>Optional</sup> <a name="contact_number" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.contactNumber"></a>

```python
contact_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#contact_number QuicksightAccountSubscription#contact_number}.

---

##### `directory_id`<sup>Optional</sup> <a name="directory_id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#directory_id QuicksightAccountSubscription#directory_id}.

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#email_address QuicksightAccountSubscription#email_address}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#first_name QuicksightAccountSubscription#first_name}.

---

##### `iam_identity_center_instance_arn`<sup>Optional</sup> <a name="iam_identity_center_instance_arn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.iamIdentityCenterInstanceArn"></a>

```python
iam_identity_center_instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#iam_identity_center_instance_arn QuicksightAccountSubscription#iam_identity_center_instance_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#id QuicksightAccountSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#last_name QuicksightAccountSubscription#last_name}.

---

##### `reader_group`<sup>Optional</sup> <a name="reader_group" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.readerGroup"></a>

```python
reader_group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#reader_group QuicksightAccountSubscription#reader_group}.

---

##### `realm`<sup>Optional</sup> <a name="realm" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.realm"></a>

```python
realm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#realm QuicksightAccountSubscription#realm}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#region QuicksightAccountSubscription#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionConfig.property.timeouts"></a>

```python
timeouts: QuicksightAccountSubscriptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#timeouts QuicksightAccountSubscription#timeouts}

---

### QuicksightAccountSubscriptionTimeouts <a name="QuicksightAccountSubscriptionTimeouts" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_account_subscription

quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#create QuicksightAccountSubscription#create}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#delete QuicksightAccountSubscription#delete}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#read QuicksightAccountSubscription#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#create QuicksightAccountSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#delete QuicksightAccountSubscription#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/quicksight_account_subscription#read QuicksightAccountSubscription#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightAccountSubscriptionTimeoutsOutputReference <a name="QuicksightAccountSubscriptionTimeoutsOutputReference" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_account_subscription

quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QuicksightAccountSubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightAccountSubscription.QuicksightAccountSubscriptionTimeouts">QuicksightAccountSubscriptionTimeouts</a>]

---



