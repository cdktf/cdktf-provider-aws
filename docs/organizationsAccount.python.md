# `organizationsAccount` Submodule <a name="`organizationsAccount` Submodule" id="@cdktf/provider-aws.organizationsAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationsAccount <a name="OrganizationsAccount" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account aws_organizations_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_account

organizationsAccount.OrganizationsAccount(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str,
  name: str,
  close_on_deletion: typing.Union[bool, IResolvable] = None,
  create_govcloud: typing.Union[bool, IResolvable] = None,
  iam_user_access_to_billing: str = None,
  id: str = None,
  parent_id: str = None,
  role_name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: OrganizationsAccountTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#email OrganizationsAccount#email}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#name OrganizationsAccount#name}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.closeOnDeletion">close_on_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#close_on_deletion OrganizationsAccount#close_on_deletion}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.createGovcloud">create_govcloud</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#create_govcloud OrganizationsAccount#create_govcloud}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.iamUserAccessToBilling">iam_user_access_to_billing</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#iam_user_access_to_billing OrganizationsAccount#iam_user_access_to_billing}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#id OrganizationsAccount#id}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#parent_id OrganizationsAccount#parent_id}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#role_name OrganizationsAccount#role_name}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#tags OrganizationsAccount#tags}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#tags_all OrganizationsAccount#tags_all}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeouts">OrganizationsAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#email OrganizationsAccount#email}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#name OrganizationsAccount#name}.

---

##### `close_on_deletion`<sup>Optional</sup> <a name="close_on_deletion" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.closeOnDeletion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#close_on_deletion OrganizationsAccount#close_on_deletion}.

---

##### `create_govcloud`<sup>Optional</sup> <a name="create_govcloud" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.createGovcloud"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#create_govcloud OrganizationsAccount#create_govcloud}.

---

##### `iam_user_access_to_billing`<sup>Optional</sup> <a name="iam_user_access_to_billing" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.iamUserAccessToBilling"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#iam_user_access_to_billing OrganizationsAccount#iam_user_access_to_billing}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#id OrganizationsAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.parentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#parent_id OrganizationsAccount#parent_id}.

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.roleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#role_name OrganizationsAccount#role_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#tags OrganizationsAccount#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#tags_all OrganizationsAccount#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeouts">OrganizationsAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#timeouts OrganizationsAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetCloseOnDeletion">reset_close_on_deletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetCreateGovcloud">reset_create_govcloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetIamUserAccessToBilling">reset_iam_user_access_to_billing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetParentId">reset_parent_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetRoleName">reset_role_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#create OrganizationsAccount#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#delete OrganizationsAccount#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#update OrganizationsAccount#update}.

---

##### `reset_close_on_deletion` <a name="reset_close_on_deletion" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetCloseOnDeletion"></a>

```python
def reset_close_on_deletion() -> None
```

##### `reset_create_govcloud` <a name="reset_create_govcloud" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetCreateGovcloud"></a>

```python
def reset_create_govcloud() -> None
```

##### `reset_iam_user_access_to_billing` <a name="reset_iam_user_access_to_billing" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetIamUserAccessToBilling"></a>

```python
def reset_iam_user_access_to_billing() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parent_id` <a name="reset_parent_id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetParentId"></a>

```python
def reset_parent_id() -> None
```

##### `reset_role_name` <a name="reset_role_name" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetRoleName"></a>

```python
def reset_role_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OrganizationsAccount resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import organizations_account

organizationsAccount.OrganizationsAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import organizations_account

organizationsAccount.OrganizationsAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import organizations_account

organizationsAccount.OrganizationsAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import organizations_account

organizationsAccount.OrganizationsAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OrganizationsAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrganizationsAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrganizationsAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationsAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.govcloudId">govcloud_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.joinedMethod">joined_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.joinedTimestamp">joined_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference">OrganizationsAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.closeOnDeletionInput">close_on_deletion_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.createGovcloudInput">create_govcloud_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.iamUserAccessToBillingInput">iam_user_access_to_billing_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.parentIdInput">parent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeouts">OrganizationsAccountTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.closeOnDeletion">close_on_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.createGovcloud">create_govcloud</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.iamUserAccessToBilling">iam_user_access_to_billing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `govcloud_id`<sup>Required</sup> <a name="govcloud_id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.govcloudId"></a>

```python
govcloud_id: str
```

- *Type:* str

---

##### `joined_method`<sup>Required</sup> <a name="joined_method" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.joinedMethod"></a>

```python
joined_method: str
```

- *Type:* str

---

##### `joined_timestamp`<sup>Required</sup> <a name="joined_timestamp" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.joinedTimestamp"></a>

```python
joined_timestamp: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.timeouts"></a>

```python
timeouts: OrganizationsAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference">OrganizationsAccountTimeoutsOutputReference</a>

---

##### `close_on_deletion_input`<sup>Optional</sup> <a name="close_on_deletion_input" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.closeOnDeletionInput"></a>

```python
close_on_deletion_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_govcloud_input`<sup>Optional</sup> <a name="create_govcloud_input" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.createGovcloudInput"></a>

```python
create_govcloud_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `iam_user_access_to_billing_input`<sup>Optional</sup> <a name="iam_user_access_to_billing_input" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.iamUserAccessToBillingInput"></a>

```python
iam_user_access_to_billing_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_id_input`<sup>Optional</sup> <a name="parent_id_input" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.parentIdInput"></a>

```python
parent_id_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OrganizationsAccountTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeouts">OrganizationsAccountTimeouts</a>]

---

##### `close_on_deletion`<sup>Required</sup> <a name="close_on_deletion" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.closeOnDeletion"></a>

```python
close_on_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_govcloud`<sup>Required</sup> <a name="create_govcloud" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.createGovcloud"></a>

```python
create_govcloud: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `iam_user_access_to_billing`<sup>Required</sup> <a name="iam_user_access_to_billing" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.iamUserAccessToBilling"></a>

```python
iam_user_access_to_billing: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationsAccountConfig <a name="OrganizationsAccountConfig" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_account

organizationsAccount.OrganizationsAccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str,
  name: str,
  close_on_deletion: typing.Union[bool, IResolvable] = None,
  create_govcloud: typing.Union[bool, IResolvable] = None,
  iam_user_access_to_billing: str = None,
  id: str = None,
  parent_id: str = None,
  role_name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: OrganizationsAccountTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#email OrganizationsAccount#email}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#name OrganizationsAccount#name}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.closeOnDeletion">close_on_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#close_on_deletion OrganizationsAccount#close_on_deletion}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.createGovcloud">create_govcloud</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#create_govcloud OrganizationsAccount#create_govcloud}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.iamUserAccessToBilling">iam_user_access_to_billing</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#iam_user_access_to_billing OrganizationsAccount#iam_user_access_to_billing}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#id OrganizationsAccount#id}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.parentId">parent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#parent_id OrganizationsAccount#parent_id}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.roleName">role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#role_name OrganizationsAccount#role_name}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#tags OrganizationsAccount#tags}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#tags_all OrganizationsAccount#tags_all}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeouts">OrganizationsAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#email OrganizationsAccount#email}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#name OrganizationsAccount#name}.

---

##### `close_on_deletion`<sup>Optional</sup> <a name="close_on_deletion" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.closeOnDeletion"></a>

```python
close_on_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#close_on_deletion OrganizationsAccount#close_on_deletion}.

---

##### `create_govcloud`<sup>Optional</sup> <a name="create_govcloud" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.createGovcloud"></a>

```python
create_govcloud: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#create_govcloud OrganizationsAccount#create_govcloud}.

---

##### `iam_user_access_to_billing`<sup>Optional</sup> <a name="iam_user_access_to_billing" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.iamUserAccessToBilling"></a>

```python
iam_user_access_to_billing: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#iam_user_access_to_billing OrganizationsAccount#iam_user_access_to_billing}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#id OrganizationsAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent_id`<sup>Optional</sup> <a name="parent_id" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#parent_id OrganizationsAccount#parent_id}.

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#role_name OrganizationsAccount#role_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#tags OrganizationsAccount#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#tags_all OrganizationsAccount#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountConfig.property.timeouts"></a>

```python
timeouts: OrganizationsAccountTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeouts">OrganizationsAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#timeouts OrganizationsAccount#timeouts}

---

### OrganizationsAccountTimeouts <a name="OrganizationsAccountTimeouts" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_account

organizationsAccount.OrganizationsAccountTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#create OrganizationsAccount#create}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#delete OrganizationsAccount#delete}. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#update OrganizationsAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#create OrganizationsAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#delete OrganizationsAccount#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/organizations_account#update OrganizationsAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationsAccountTimeoutsOutputReference <a name="OrganizationsAccountTimeoutsOutputReference" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_account

organizationsAccount.OrganizationsAccountTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeouts">OrganizationsAccountTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrganizationsAccountTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.organizationsAccount.OrganizationsAccountTimeouts">OrganizationsAccountTimeouts</a>]

---



