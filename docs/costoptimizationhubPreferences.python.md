# `costoptimizationhubPreferences` Submodule <a name="`costoptimizationhubPreferences` Submodule" id="@cdktf/provider-aws.costoptimizationhubPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostoptimizationhubPreferences <a name="CostoptimizationhubPreferences" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/costoptimizationhub_preferences aws_costoptimizationhub_preferences}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import costoptimizationhub_preferences

costoptimizationhubPreferences.CostoptimizationhubPreferences(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  member_account_discount_visibility: str = None,
  savings_estimation_mode: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.memberAccountDiscountVisibility">member_account_discount_visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/costoptimizationhub_preferences#member_account_discount_visibility CostoptimizationhubPreferences#member_account_discount_visibility}. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.savingsEstimationMode">savings_estimation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/costoptimizationhub_preferences#savings_estimation_mode CostoptimizationhubPreferences#savings_estimation_mode}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member_account_discount_visibility`<sup>Optional</sup> <a name="member_account_discount_visibility" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.memberAccountDiscountVisibility"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/costoptimizationhub_preferences#member_account_discount_visibility CostoptimizationhubPreferences#member_account_discount_visibility}.

---

##### `savings_estimation_mode`<sup>Optional</sup> <a name="savings_estimation_mode" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.Initializer.parameter.savingsEstimationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/costoptimizationhub_preferences#savings_estimation_mode CostoptimizationhubPreferences#savings_estimation_mode}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetMemberAccountDiscountVisibility">reset_member_account_discount_visibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetSavingsEstimationMode">reset_savings_estimation_mode</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_member_account_discount_visibility` <a name="reset_member_account_discount_visibility" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetMemberAccountDiscountVisibility"></a>

```python
def reset_member_account_discount_visibility() -> None
```

##### `reset_savings_estimation_mode` <a name="reset_savings_estimation_mode" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.resetSavingsEstimationMode"></a>

```python
def reset_savings_estimation_mode() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CostoptimizationhubPreferences resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import costoptimizationhub_preferences

costoptimizationhubPreferences.CostoptimizationhubPreferences.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import costoptimizationhub_preferences

costoptimizationhubPreferences.CostoptimizationhubPreferences.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import costoptimizationhub_preferences

costoptimizationhubPreferences.CostoptimizationhubPreferences.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import costoptimizationhub_preferences

costoptimizationhubPreferences.CostoptimizationhubPreferences.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CostoptimizationhubPreferences resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CostoptimizationhubPreferences to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CostoptimizationhubPreferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/costoptimizationhub_preferences#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CostoptimizationhubPreferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.memberAccountDiscountVisibilityInput">member_account_discount_visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.savingsEstimationModeInput">savings_estimation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.memberAccountDiscountVisibility">member_account_discount_visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.savingsEstimationMode">savings_estimation_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member_account_discount_visibility_input`<sup>Optional</sup> <a name="member_account_discount_visibility_input" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.memberAccountDiscountVisibilityInput"></a>

```python
member_account_discount_visibility_input: str
```

- *Type:* str

---

##### `savings_estimation_mode_input`<sup>Optional</sup> <a name="savings_estimation_mode_input" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.savingsEstimationModeInput"></a>

```python
savings_estimation_mode_input: str
```

- *Type:* str

---

##### `member_account_discount_visibility`<sup>Required</sup> <a name="member_account_discount_visibility" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.memberAccountDiscountVisibility"></a>

```python
member_account_discount_visibility: str
```

- *Type:* str

---

##### `savings_estimation_mode`<sup>Required</sup> <a name="savings_estimation_mode" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.savingsEstimationMode"></a>

```python
savings_estimation_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferences.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CostoptimizationhubPreferencesConfig <a name="CostoptimizationhubPreferencesConfig" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import costoptimizationhub_preferences

costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  member_account_discount_visibility: str = None,
  savings_estimation_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.memberAccountDiscountVisibility">member_account_discount_visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/costoptimizationhub_preferences#member_account_discount_visibility CostoptimizationhubPreferences#member_account_discount_visibility}. |
| <code><a href="#@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.savingsEstimationMode">savings_estimation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/costoptimizationhub_preferences#savings_estimation_mode CostoptimizationhubPreferences#savings_estimation_mode}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member_account_discount_visibility`<sup>Optional</sup> <a name="member_account_discount_visibility" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.memberAccountDiscountVisibility"></a>

```python
member_account_discount_visibility: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/costoptimizationhub_preferences#member_account_discount_visibility CostoptimizationhubPreferences#member_account_discount_visibility}.

---

##### `savings_estimation_mode`<sup>Optional</sup> <a name="savings_estimation_mode" id="@cdktf/provider-aws.costoptimizationhubPreferences.CostoptimizationhubPreferencesConfig.property.savingsEstimationMode"></a>

```python
savings_estimation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/costoptimizationhub_preferences#savings_estimation_mode CostoptimizationhubPreferences#savings_estimation_mode}.

---



