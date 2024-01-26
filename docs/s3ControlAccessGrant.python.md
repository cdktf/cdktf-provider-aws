# `s3ControlAccessGrant` Submodule <a name="`s3ControlAccessGrant` Submodule" id="@cdktf/provider-aws.s3ControlAccessGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlAccessGrant <a name="S3ControlAccessGrant" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant aws_s3control_access_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_access_grant

s3ControlAccessGrant.S3ControlAccessGrant(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_grants_location_id: str,
  permission: str,
  access_grants_location_configuration: typing.Union[IResolvable, typing.List[S3ControlAccessGrantAccessGrantsLocationConfiguration]] = None,
  account_id: str = None,
  grantee: typing.Union[IResolvable, typing.List[S3ControlAccessGrantGrantee]] = None,
  s3_prefix_type: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.accessGrantsLocationId">access_grants_location_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#access_grants_location_id S3ControlAccessGrant#access_grants_location_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#permission S3ControlAccessGrant#permission}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.accessGrantsLocationConfiguration">access_grants_location_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>]]</code> | access_grants_location_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#account_id S3ControlAccessGrant#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.grantee">grantee</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>]]</code> | grantee block. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.s3PrefixType">s3_prefix_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#s3_prefix_type S3ControlAccessGrant#s3_prefix_type}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#tags S3ControlAccessGrant#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_grants_location_id`<sup>Required</sup> <a name="access_grants_location_id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.accessGrantsLocationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#access_grants_location_id S3ControlAccessGrant#access_grants_location_id}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.permission"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#permission S3ControlAccessGrant#permission}.

---

##### `access_grants_location_configuration`<sup>Optional</sup> <a name="access_grants_location_configuration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.accessGrantsLocationConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>]]

access_grants_location_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#access_grants_location_configuration S3ControlAccessGrant#access_grants_location_configuration}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#account_id S3ControlAccessGrant#account_id}.

---

##### `grantee`<sup>Optional</sup> <a name="grantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.grantee"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>]]

grantee block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#grantee S3ControlAccessGrant#grantee}

---

##### `s3_prefix_type`<sup>Optional</sup> <a name="s3_prefix_type" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.s3PrefixType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#s3_prefix_type S3ControlAccessGrant#s3_prefix_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#tags S3ControlAccessGrant#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putAccessGrantsLocationConfiguration">put_access_grants_location_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putGrantee">put_grantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetAccessGrantsLocationConfiguration">reset_access_grants_location_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetGrantee">reset_grantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetS3PrefixType">reset_s3_prefix_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_grants_location_configuration` <a name="put_access_grants_location_configuration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putAccessGrantsLocationConfiguration"></a>

```python
def put_access_grants_location_configuration(
  value: typing.Union[IResolvable, typing.List[S3ControlAccessGrantAccessGrantsLocationConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putAccessGrantsLocationConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>]]

---

##### `put_grantee` <a name="put_grantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putGrantee"></a>

```python
def put_grantee(
  value: typing.Union[IResolvable, typing.List[S3ControlAccessGrantGrantee]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.putGrantee.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>]]

---

##### `reset_access_grants_location_configuration` <a name="reset_access_grants_location_configuration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetAccessGrantsLocationConfiguration"></a>

```python
def reset_access_grants_location_configuration() -> None
```

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_grantee` <a name="reset_grantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetGrantee"></a>

```python
def reset_grantee() -> None
```

##### `reset_s3_prefix_type` <a name="reset_s3_prefix_type" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetS3PrefixType"></a>

```python
def reset_s3_prefix_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a S3ControlAccessGrant resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_access_grant

s3ControlAccessGrant.S3ControlAccessGrant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_access_grant

s3ControlAccessGrant.S3ControlAccessGrant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_access_grant

s3ControlAccessGrant.S3ControlAccessGrant.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_access_grant

s3ControlAccessGrant.S3ControlAccessGrant.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a S3ControlAccessGrant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3ControlAccessGrant to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3ControlAccessGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3ControlAccessGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantArn">access_grant_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantId">access_grant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationConfiguration">access_grants_location_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList">S3ControlAccessGrantAccessGrantsLocationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.grantee">grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList">S3ControlAccessGrantGranteeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.grantScope">grant_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationConfigurationInput">access_grants_location_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationIdInput">access_grants_location_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.granteeInput">grantee_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.s3PrefixTypeInput">s3_prefix_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationId">access_grants_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.s3PrefixType">s3_prefix_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_grant_arn`<sup>Required</sup> <a name="access_grant_arn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantArn"></a>

```python
access_grant_arn: str
```

- *Type:* str

---

##### `access_grant_id`<sup>Required</sup> <a name="access_grant_id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantId"></a>

```python
access_grant_id: str
```

- *Type:* str

---

##### `access_grants_location_configuration`<sup>Required</sup> <a name="access_grants_location_configuration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationConfiguration"></a>

```python
access_grants_location_configuration: S3ControlAccessGrantAccessGrantsLocationConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList">S3ControlAccessGrantAccessGrantsLocationConfigurationList</a>

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.grantee"></a>

```python
grantee: S3ControlAccessGrantGranteeList
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList">S3ControlAccessGrantGranteeList</a>

---

##### `grant_scope`<sup>Required</sup> <a name="grant_scope" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.grantScope"></a>

```python
grant_scope: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `access_grants_location_configuration_input`<sup>Optional</sup> <a name="access_grants_location_configuration_input" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationConfigurationInput"></a>

```python
access_grants_location_configuration_input: typing.Union[IResolvable, typing.List[S3ControlAccessGrantAccessGrantsLocationConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>]]

---

##### `access_grants_location_id_input`<sup>Optional</sup> <a name="access_grants_location_id_input" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationIdInput"></a>

```python
access_grants_location_id_input: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `grantee_input`<sup>Optional</sup> <a name="grantee_input" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.granteeInput"></a>

```python
grantee_input: typing.Union[IResolvable, typing.List[S3ControlAccessGrantGrantee]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>]]

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `s3_prefix_type_input`<sup>Optional</sup> <a name="s3_prefix_type_input" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.s3PrefixTypeInput"></a>

```python
s3_prefix_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `access_grants_location_id`<sup>Required</sup> <a name="access_grants_location_id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accessGrantsLocationId"></a>

```python
access_grants_location_id: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `s3_prefix_type`<sup>Required</sup> <a name="s3_prefix_type" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.s3PrefixType"></a>

```python
s3_prefix_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlAccessGrantAccessGrantsLocationConfiguration <a name="S3ControlAccessGrantAccessGrantsLocationConfiguration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_access_grant

s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration(
  s3_sub_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration.property.s3SubPrefix">s3_sub_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#s3_sub_prefix S3ControlAccessGrant#s3_sub_prefix}. |

---

##### `s3_sub_prefix`<sup>Optional</sup> <a name="s3_sub_prefix" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration.property.s3SubPrefix"></a>

```python
s3_sub_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#s3_sub_prefix S3ControlAccessGrant#s3_sub_prefix}.

---

### S3ControlAccessGrantConfig <a name="S3ControlAccessGrantConfig" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_access_grant

s3ControlAccessGrant.S3ControlAccessGrantConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_grants_location_id: str,
  permission: str,
  access_grants_location_configuration: typing.Union[IResolvable, typing.List[S3ControlAccessGrantAccessGrantsLocationConfiguration]] = None,
  account_id: str = None,
  grantee: typing.Union[IResolvable, typing.List[S3ControlAccessGrantGrantee]] = None,
  s3_prefix_type: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accessGrantsLocationId">access_grants_location_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#access_grants_location_id S3ControlAccessGrant#access_grants_location_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#permission S3ControlAccessGrant#permission}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accessGrantsLocationConfiguration">access_grants_location_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>]]</code> | access_grants_location_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#account_id S3ControlAccessGrant#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.grantee">grantee</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>]]</code> | grantee block. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.s3PrefixType">s3_prefix_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#s3_prefix_type S3ControlAccessGrant#s3_prefix_type}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#tags S3ControlAccessGrant#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_grants_location_id`<sup>Required</sup> <a name="access_grants_location_id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accessGrantsLocationId"></a>

```python
access_grants_location_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#access_grants_location_id S3ControlAccessGrant#access_grants_location_id}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#permission S3ControlAccessGrant#permission}.

---

##### `access_grants_location_configuration`<sup>Optional</sup> <a name="access_grants_location_configuration" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accessGrantsLocationConfiguration"></a>

```python
access_grants_location_configuration: typing.Union[IResolvable, typing.List[S3ControlAccessGrantAccessGrantsLocationConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>]]

access_grants_location_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#access_grants_location_configuration S3ControlAccessGrant#access_grants_location_configuration}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#account_id S3ControlAccessGrant#account_id}.

---

##### `grantee`<sup>Optional</sup> <a name="grantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.grantee"></a>

```python
grantee: typing.Union[IResolvable, typing.List[S3ControlAccessGrantGrantee]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>]]

grantee block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#grantee S3ControlAccessGrant#grantee}

---

##### `s3_prefix_type`<sup>Optional</sup> <a name="s3_prefix_type" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.s3PrefixType"></a>

```python
s3_prefix_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#s3_prefix_type S3ControlAccessGrant#s3_prefix_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#tags S3ControlAccessGrant#tags}.

---

### S3ControlAccessGrantGrantee <a name="S3ControlAccessGrantGrantee" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_access_grant

s3ControlAccessGrant.S3ControlAccessGrantGrantee(
  grantee_identifier: str,
  grantee_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.property.granteeIdentifier">grantee_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#grantee_identifier S3ControlAccessGrant#grantee_identifier}. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.property.granteeType">grantee_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#grantee_type S3ControlAccessGrant#grantee_type}. |

---

##### `grantee_identifier`<sup>Required</sup> <a name="grantee_identifier" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.property.granteeIdentifier"></a>

```python
grantee_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#grantee_identifier S3ControlAccessGrant#grantee_identifier}.

---

##### `grantee_type`<sup>Required</sup> <a name="grantee_type" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee.property.granteeType"></a>

```python
grantee_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.34.0/docs/resources/s3control_access_grant#grantee_type S3ControlAccessGrant#grantee_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlAccessGrantAccessGrantsLocationConfigurationList <a name="S3ControlAccessGrantAccessGrantsLocationConfigurationList" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_access_grant

s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3ControlAccessGrantAccessGrantsLocationConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>]]

---


### S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference <a name="S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_access_grant

s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resetS3SubPrefix">reset_s3_sub_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_sub_prefix` <a name="reset_s3_sub_prefix" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.resetS3SubPrefix"></a>

```python
def reset_s3_sub_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefixInput">s3_sub_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefix">s3_sub_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_sub_prefix_input`<sup>Optional</sup> <a name="s3_sub_prefix_input" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefixInput"></a>

```python
s3_sub_prefix_input: str
```

- *Type:* str

---

##### `s3_sub_prefix`<sup>Required</sup> <a name="s3_sub_prefix" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefix"></a>

```python
s3_sub_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3ControlAccessGrantAccessGrantsLocationConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantAccessGrantsLocationConfiguration">S3ControlAccessGrantAccessGrantsLocationConfiguration</a>]

---


### S3ControlAccessGrantGranteeList <a name="S3ControlAccessGrantGranteeList" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_access_grant

s3ControlAccessGrant.S3ControlAccessGrantGranteeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3ControlAccessGrantGranteeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3ControlAccessGrantGrantee]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>]]

---


### S3ControlAccessGrantGranteeOutputReference <a name="S3ControlAccessGrantGranteeOutputReference" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_control_access_grant

s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeIdentifierInput">grantee_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeTypeInput">grantee_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeIdentifier">grantee_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeType">grantee_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grantee_identifier_input`<sup>Optional</sup> <a name="grantee_identifier_input" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeIdentifierInput"></a>

```python
grantee_identifier_input: str
```

- *Type:* str

---

##### `grantee_type_input`<sup>Optional</sup> <a name="grantee_type_input" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeTypeInput"></a>

```python
grantee_type_input: str
```

- *Type:* str

---

##### `grantee_identifier`<sup>Required</sup> <a name="grantee_identifier" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeIdentifier"></a>

```python
grantee_identifier: str
```

- *Type:* str

---

##### `grantee_type`<sup>Required</sup> <a name="grantee_type" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.granteeType"></a>

```python
grantee_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGranteeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3ControlAccessGrantGrantee]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.s3ControlAccessGrant.S3ControlAccessGrantGrantee">S3ControlAccessGrantGrantee</a>]

---



