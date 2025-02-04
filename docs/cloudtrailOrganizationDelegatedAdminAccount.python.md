# `cloudtrailOrganizationDelegatedAdminAccount` Submodule <a name="`cloudtrailOrganizationDelegatedAdminAccount` Submodule" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudtrailOrganizationDelegatedAdminAccount <a name="CloudtrailOrganizationDelegatedAdminAccount" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudtrail_organization_delegated_admin_account aws_cloudtrail_organization_delegated_admin_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_organization_delegated_admin_account

cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudtrail_organization_delegated_admin_account#account_id CloudtrailOrganizationDelegatedAdminAccount#account_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudtrail_organization_delegated_admin_account#account_id CloudtrailOrganizationDelegatedAdminAccount#account_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudtrailOrganizationDelegatedAdminAccount resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_organization_delegated_admin_account

cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_organization_delegated_admin_account

cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_organization_delegated_admin_account

cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_organization_delegated_admin_account

cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudtrailOrganizationDelegatedAdminAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudtrailOrganizationDelegatedAdminAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudtrailOrganizationDelegatedAdminAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudtrail_organization_delegated_admin_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudtrailOrganizationDelegatedAdminAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.servicePrincipal">service_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_principal`<sup>Required</sup> <a name="service_principal" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.servicePrincipal"></a>

```python
service_principal: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudtrailOrganizationDelegatedAdminAccountConfig <a name="CloudtrailOrganizationDelegatedAdminAccountConfig" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudtrail_organization_delegated_admin_account

cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudtrail_organization_delegated_admin_account#account_id CloudtrailOrganizationDelegatedAdminAccount#account_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.cloudtrailOrganizationDelegatedAdminAccount.CloudtrailOrganizationDelegatedAdminAccountConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/cloudtrail_organization_delegated_admin_account#account_id CloudtrailOrganizationDelegatedAdminAccount#account_id}.

---



