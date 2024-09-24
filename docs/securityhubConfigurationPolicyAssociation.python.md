# `securityhubConfigurationPolicyAssociation` Submodule <a name="`securityhubConfigurationPolicyAssociation` Submodule" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubConfigurationPolicyAssociation <a name="SecurityhubConfigurationPolicyAssociation" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association aws_securityhub_configuration_policy_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_configuration_policy_association

securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_id: str,
  target_id: str,
  id: str = None,
  timeouts: SecurityhubConfigurationPolicyAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | The universally unique identifier (UUID) of the configuration policy. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | The identifier of the target account, organizational unit, or the root to associate with the specified configuration. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#id SecurityhubConfigurationPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.policyId"></a>

- *Type:* str

The universally unique identifier (UUID) of the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#policy_id SecurityhubConfigurationPolicyAssociation#policy_id}

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.targetId"></a>

- *Type:* str

The identifier of the target account, organizational unit, or the root to associate with the specified configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#target_id SecurityhubConfigurationPolicyAssociation#target_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#id SecurityhubConfigurationPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#timeouts SecurityhubConfigurationPolicyAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#create SecurityhubConfigurationPolicyAssociation#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#update SecurityhubConfigurationPolicyAssociation#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecurityhubConfigurationPolicyAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_configuration_policy_association

securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_configuration_policy_association

securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_configuration_policy_association

securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_configuration_policy_association

securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecurityhubConfigurationPolicyAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityhubConfigurationPolicyAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityhubConfigurationPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityhubConfigurationPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference">SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.timeouts"></a>

```python
timeouts: SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference">SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SecurityhubConfigurationPolicyAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubConfigurationPolicyAssociationConfig <a name="SecurityhubConfigurationPolicyAssociationConfig" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_configuration_policy_association

securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  policy_id: str,
  target_id: str,
  id: str = None,
  timeouts: SecurityhubConfigurationPolicyAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.policyId">policy_id</a></code> | <code>str</code> | The universally unique identifier (UUID) of the configuration policy. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.targetId">target_id</a></code> | <code>str</code> | The identifier of the target account, organizational unit, or the root to associate with the specified configuration. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#id SecurityhubConfigurationPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

The universally unique identifier (UUID) of the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#policy_id SecurityhubConfigurationPolicyAssociation#policy_id}

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

The identifier of the target account, organizational unit, or the root to associate with the specified configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#target_id SecurityhubConfigurationPolicyAssociation#target_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#id SecurityhubConfigurationPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.timeouts"></a>

```python
timeouts: SecurityhubConfigurationPolicyAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#timeouts SecurityhubConfigurationPolicyAssociation#timeouts}

---

### SecurityhubConfigurationPolicyAssociationTimeouts <a name="SecurityhubConfigurationPolicyAssociationTimeouts" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_configuration_policy_association

securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#create SecurityhubConfigurationPolicyAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#update SecurityhubConfigurationPolicyAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#create SecurityhubConfigurationPolicyAssociation#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.68.0/docs/resources/securityhub_configuration_policy_association#update SecurityhubConfigurationPolicyAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference <a name="SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_configuration_policy_association

securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecurityhubConfigurationPolicyAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a>]

---



