# `shieldDrtAccessLogBucketAssociation` Submodule <a name="`shieldDrtAccessLogBucketAssociation` Submodule" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldDrtAccessLogBucketAssociation <a name="ShieldDrtAccessLogBucketAssociation" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/shield_drt_access_log_bucket_association aws_shield_drt_access_log_bucket_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import shield_drt_access_log_bucket_association

shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log_bucket: str,
  role_arn_association_id: str,
  timeouts: ShieldDrtAccessLogBucketAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.logBucket">log_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/shield_drt_access_log_bucket_association#log_bucket ShieldDrtAccessLogBucketAssociation#log_bucket}. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.roleArnAssociationId">role_arn_association_id</a></code> | <code>str</code> | Unused. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_bucket`<sup>Required</sup> <a name="log_bucket" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.logBucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/shield_drt_access_log_bucket_association#log_bucket ShieldDrtAccessLogBucketAssociation#log_bucket}.

---

##### `role_arn_association_id`<sup>Required</sup> <a name="role_arn_association_id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.roleArnAssociationId"></a>

- *Type:* str

Unused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/shield_drt_access_log_bucket_association#role_arn_association_id ShieldDrtAccessLogBucketAssociation#role_arn_association_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/shield_drt_access_log_bucket_association#timeouts ShieldDrtAccessLogBucketAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/shield_drt_access_log_bucket_association#create ShieldDrtAccessLogBucketAssociation#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/shield_drt_access_log_bucket_association#delete ShieldDrtAccessLogBucketAssociation#delete}

---

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ShieldDrtAccessLogBucketAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import shield_drt_access_log_bucket_association

shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import shield_drt_access_log_bucket_association

shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import shield_drt_access_log_bucket_association

shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import shield_drt_access_log_bucket_association

shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ShieldDrtAccessLogBucketAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ShieldDrtAccessLogBucketAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ShieldDrtAccessLogBucketAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/shield_drt_access_log_bucket_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ShieldDrtAccessLogBucketAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference">ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.logBucketInput">log_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.roleArnAssociationIdInput">role_arn_association_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.logBucket">log_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.roleArnAssociationId">role_arn_association_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.timeouts"></a>

```python
timeouts: ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference">ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference</a>

---

##### `log_bucket_input`<sup>Optional</sup> <a name="log_bucket_input" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.logBucketInput"></a>

```python
log_bucket_input: str
```

- *Type:* str

---

##### `role_arn_association_id_input`<sup>Optional</sup> <a name="role_arn_association_id_input" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.roleArnAssociationIdInput"></a>

```python
role_arn_association_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ShieldDrtAccessLogBucketAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a>]

---

##### `log_bucket`<sup>Required</sup> <a name="log_bucket" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.logBucket"></a>

```python
log_bucket: str
```

- *Type:* str

---

##### `role_arn_association_id`<sup>Required</sup> <a name="role_arn_association_id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.roleArnAssociationId"></a>

```python
role_arn_association_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldDrtAccessLogBucketAssociationConfig <a name="ShieldDrtAccessLogBucketAssociationConfig" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import shield_drt_access_log_bucket_association

shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log_bucket: str,
  role_arn_association_id: str,
  timeouts: ShieldDrtAccessLogBucketAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.logBucket">log_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/shield_drt_access_log_bucket_association#log_bucket ShieldDrtAccessLogBucketAssociation#log_bucket}. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.roleArnAssociationId">role_arn_association_id</a></code> | <code>str</code> | Unused. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_bucket`<sup>Required</sup> <a name="log_bucket" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.logBucket"></a>

```python
log_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/shield_drt_access_log_bucket_association#log_bucket ShieldDrtAccessLogBucketAssociation#log_bucket}.

---

##### `role_arn_association_id`<sup>Required</sup> <a name="role_arn_association_id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.roleArnAssociationId"></a>

```python
role_arn_association_id: str
```

- *Type:* str

Unused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/shield_drt_access_log_bucket_association#role_arn_association_id ShieldDrtAccessLogBucketAssociation#role_arn_association_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.timeouts"></a>

```python
timeouts: ShieldDrtAccessLogBucketAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/shield_drt_access_log_bucket_association#timeouts ShieldDrtAccessLogBucketAssociation#timeouts}

---

### ShieldDrtAccessLogBucketAssociationTimeouts <a name="ShieldDrtAccessLogBucketAssociationTimeouts" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import shield_drt_access_log_bucket_association

shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/shield_drt_access_log_bucket_association#create ShieldDrtAccessLogBucketAssociation#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/shield_drt_access_log_bucket_association#delete ShieldDrtAccessLogBucketAssociation#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference <a name="ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import shield_drt_access_log_bucket_association

shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ShieldDrtAccessLogBucketAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a>]

---



