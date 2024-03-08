# `redshiftserverlessNamespace` Submodule <a name="`redshiftserverlessNamespace` Submodule" id="@cdktf/provider-aws.redshiftserverlessNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftserverlessNamespace <a name="RedshiftserverlessNamespace" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace aws_redshiftserverless_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespace(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace_name: str,
  admin_password_secret_kms_key_id: str = None,
  admin_username: str = None,
  admin_user_password: str = None,
  db_name: str = None,
  default_iam_role_arn: str = None,
  iam_roles: typing.List[str] = None,
  id: str = None,
  kms_key_id: str = None,
  log_exports: typing.List[str] = None,
  manage_admin_password: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminPasswordSecretKmsKeyId">admin_password_secret_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id RedshiftserverlessNamespace#admin_password_secret_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminUsername">admin_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminUserPassword">admin_user_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.dbName">db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.defaultIamRoleArn">default_iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#id RedshiftserverlessNamespace#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.logExports">log_exports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.manageAdminPassword">manage_admin_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#manage_admin_password RedshiftserverlessNamespace#manage_admin_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#tags_all RedshiftserverlessNamespace#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.namespaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}.

---

##### `admin_password_secret_kms_key_id`<sup>Optional</sup> <a name="admin_password_secret_kms_key_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminPasswordSecretKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id RedshiftserverlessNamespace#admin_password_secret_kms_key_id}.

---

##### `admin_username`<sup>Optional</sup> <a name="admin_username" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}.

---

##### `admin_user_password`<sup>Optional</sup> <a name="admin_user_password" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.adminUserPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}.

---

##### `db_name`<sup>Optional</sup> <a name="db_name" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.dbName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}.

---

##### `default_iam_role_arn`<sup>Optional</sup> <a name="default_iam_role_arn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.defaultIamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}.

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.iamRoles"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#id RedshiftserverlessNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}.

---

##### `log_exports`<sup>Optional</sup> <a name="log_exports" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.logExports"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}.

---

##### `manage_admin_password`<sup>Optional</sup> <a name="manage_admin_password" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.manageAdminPassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#manage_admin_password RedshiftserverlessNamespace#manage_admin_password}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#tags_all RedshiftserverlessNamespace#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminPasswordSecretKmsKeyId">reset_admin_password_secret_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUsername">reset_admin_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPassword">reset_admin_user_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDbName">reset_db_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDefaultIamRoleArn">reset_default_iam_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetIamRoles">reset_iam_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetLogExports">reset_log_exports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetManageAdminPassword">reset_manage_admin_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_admin_password_secret_kms_key_id` <a name="reset_admin_password_secret_kms_key_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminPasswordSecretKmsKeyId"></a>

```python
def reset_admin_password_secret_kms_key_id() -> None
```

##### `reset_admin_username` <a name="reset_admin_username" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUsername"></a>

```python
def reset_admin_username() -> None
```

##### `reset_admin_user_password` <a name="reset_admin_user_password" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetAdminUserPassword"></a>

```python
def reset_admin_user_password() -> None
```

##### `reset_db_name` <a name="reset_db_name" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDbName"></a>

```python
def reset_db_name() -> None
```

##### `reset_default_iam_role_arn` <a name="reset_default_iam_role_arn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetDefaultIamRoleArn"></a>

```python
def reset_default_iam_role_arn() -> None
```

##### `reset_iam_roles` <a name="reset_iam_roles" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetIamRoles"></a>

```python
def reset_iam_roles() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_log_exports` <a name="reset_log_exports" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetLogExports"></a>

```python
def reset_log_exports() -> None
```

##### `reset_manage_admin_password` <a name="reset_manage_admin_password" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetManageAdminPassword"></a>

```python
def reset_manage_admin_password() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RedshiftserverlessNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RedshiftserverlessNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedshiftserverlessNamespace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedshiftserverlessNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftserverlessNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretArn">admin_password_secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyIdInput">admin_password_secret_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsernameInput">admin_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordInput">admin_user_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArnInput">default_iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRolesInput">iam_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExportsInput">log_exports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPasswordInput">manage_admin_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceNameInput">namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyId">admin_password_secret_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPassword">admin_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArn">default_iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExports">log_exports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPassword">manage_admin_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `admin_password_secret_arn`<sup>Required</sup> <a name="admin_password_secret_arn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretArn"></a>

```python
admin_password_secret_arn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `admin_password_secret_kms_key_id_input`<sup>Optional</sup> <a name="admin_password_secret_kms_key_id_input" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyIdInput"></a>

```python
admin_password_secret_kms_key_id_input: str
```

- *Type:* str

---

##### `admin_username_input`<sup>Optional</sup> <a name="admin_username_input" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsernameInput"></a>

```python
admin_username_input: str
```

- *Type:* str

---

##### `admin_user_password_input`<sup>Optional</sup> <a name="admin_user_password_input" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPasswordInput"></a>

```python
admin_user_password_input: str
```

- *Type:* str

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `default_iam_role_arn_input`<sup>Optional</sup> <a name="default_iam_role_arn_input" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArnInput"></a>

```python
default_iam_role_arn_input: str
```

- *Type:* str

---

##### `iam_roles_input`<sup>Optional</sup> <a name="iam_roles_input" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRolesInput"></a>

```python
iam_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `log_exports_input`<sup>Optional</sup> <a name="log_exports_input" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExportsInput"></a>

```python
log_exports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `manage_admin_password_input`<sup>Optional</sup> <a name="manage_admin_password_input" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPasswordInput"></a>

```python
manage_admin_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `namespace_name_input`<sup>Optional</sup> <a name="namespace_name_input" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceNameInput"></a>

```python
namespace_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `admin_password_secret_kms_key_id`<sup>Required</sup> <a name="admin_password_secret_kms_key_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyId"></a>

```python
admin_password_secret_kms_key_id: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `admin_user_password`<sup>Required</sup> <a name="admin_user_password" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.adminUserPassword"></a>

```python
admin_user_password: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `default_iam_role_arn`<sup>Required</sup> <a name="default_iam_role_arn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.defaultIamRoleArn"></a>

```python
default_iam_role_arn: str
```

- *Type:* str

---

##### `iam_roles`<sup>Required</sup> <a name="iam_roles" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.iamRoles"></a>

```python
iam_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `log_exports`<sup>Required</sup> <a name="log_exports" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.logExports"></a>

```python
log_exports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `manage_admin_password`<sup>Required</sup> <a name="manage_admin_password" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.manageAdminPassword"></a>

```python
manage_admin_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftserverlessNamespaceConfig <a name="RedshiftserverlessNamespaceConfig" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshiftserverless_namespace

redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace_name: str,
  admin_password_secret_kms_key_id: str = None,
  admin_username: str = None,
  admin_user_password: str = None,
  db_name: str = None,
  default_iam_role_arn: str = None,
  iam_roles: typing.List[str] = None,
  id: str = None,
  kms_key_id: str = None,
  log_exports: typing.List[str] = None,
  manage_admin_password: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminPasswordSecretKmsKeyId">admin_password_secret_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id RedshiftserverlessNamespace#admin_password_secret_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUsername">admin_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPassword">admin_user_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dbName">db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.defaultIamRoleArn">default_iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.iamRoles">iam_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#id RedshiftserverlessNamespace#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.logExports">log_exports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.manageAdminPassword">manage_admin_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#manage_admin_password RedshiftserverlessNamespace#manage_admin_password}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#tags_all RedshiftserverlessNamespace#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}.

---

##### `admin_password_secret_kms_key_id`<sup>Optional</sup> <a name="admin_password_secret_kms_key_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminPasswordSecretKmsKeyId"></a>

```python
admin_password_secret_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id RedshiftserverlessNamespace#admin_password_secret_kms_key_id}.

---

##### `admin_username`<sup>Optional</sup> <a name="admin_username" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}.

---

##### `admin_user_password`<sup>Optional</sup> <a name="admin_user_password" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.adminUserPassword"></a>

```python
admin_user_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}.

---

##### `db_name`<sup>Optional</sup> <a name="db_name" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}.

---

##### `default_iam_role_arn`<sup>Optional</sup> <a name="default_iam_role_arn" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.defaultIamRoleArn"></a>

```python
default_iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}.

---

##### `iam_roles`<sup>Optional</sup> <a name="iam_roles" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.iamRoles"></a>

```python
iam_roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#id RedshiftserverlessNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}.

---

##### `log_exports`<sup>Optional</sup> <a name="log_exports" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.logExports"></a>

```python
log_exports: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}.

---

##### `manage_admin_password`<sup>Optional</sup> <a name="manage_admin_password" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.manageAdminPassword"></a>

```python
manage_admin_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#manage_admin_password RedshiftserverlessNamespace#manage_admin_password}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftserverlessNamespace.RedshiftserverlessNamespaceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/redshiftserverless_namespace#tags_all RedshiftserverlessNamespace#tags_all}.

---



