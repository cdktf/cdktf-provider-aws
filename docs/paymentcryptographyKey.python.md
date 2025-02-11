# `paymentcryptographyKey` Submodule <a name="`paymentcryptographyKey` Submodule" id="@cdktf/provider-aws.paymentcryptographyKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaymentcryptographyKey <a name="PaymentcryptographyKey" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key aws_paymentcryptography_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import paymentcryptography_key

paymentcryptographyKey.PaymentcryptographyKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  exportable: typing.Union[bool, IResolvable],
  deletion_window_in_days: typing.Union[int, float] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  key_attributes: PaymentcryptographyKeyKeyAttributes = None,
  key_check_value_algorithm: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: PaymentcryptographyKeyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.exportable">exportable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#exportable PaymentcryptographyKey#exportable}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.deletionWindowInDays">deletion_window_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#deletion_window_in_days PaymentcryptographyKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#enabled PaymentcryptographyKey#enabled}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.keyAttributes">key_attributes</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a></code> | key_attributes block. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.keyCheckValueAlgorithm">key_check_value_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_check_value_algorithm PaymentcryptographyKey#key_check_value_algorithm}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#tags PaymentcryptographyKey#tags}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.exportable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#exportable PaymentcryptographyKey#exportable}.

---

##### `deletion_window_in_days`<sup>Optional</sup> <a name="deletion_window_in_days" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.deletionWindowInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#deletion_window_in_days PaymentcryptographyKey#deletion_window_in_days}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#enabled PaymentcryptographyKey#enabled}.

---

##### `key_attributes`<sup>Optional</sup> <a name="key_attributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.keyAttributes"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a>

key_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_attributes PaymentcryptographyKey#key_attributes}

---

##### `key_check_value_algorithm`<sup>Optional</sup> <a name="key_check_value_algorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.keyCheckValueAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_check_value_algorithm PaymentcryptographyKey#key_check_value_algorithm}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#tags PaymentcryptographyKey#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#timeouts PaymentcryptographyKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putKeyAttributes">put_key_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetDeletionWindowInDays">reset_deletion_window_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetKeyAttributes">reset_key_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetKeyCheckValueAlgorithm">reset_key_check_value_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_key_attributes` <a name="put_key_attributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putKeyAttributes"></a>

```python
def put_key_attributes(
  key_algorithm: str,
  key_class: str,
  key_usage: str,
  key_modes_of_use: PaymentcryptographyKeyKeyAttributesKeyModesOfUse = None
) -> None
```

###### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putKeyAttributes.parameter.keyAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_algorithm PaymentcryptographyKey#key_algorithm}.

---

###### `key_class`<sup>Required</sup> <a name="key_class" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putKeyAttributes.parameter.keyClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_class PaymentcryptographyKey#key_class}.

---

###### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putKeyAttributes.parameter.keyUsage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_usage PaymentcryptographyKey#key_usage}.

---

###### `key_modes_of_use`<sup>Optional</sup> <a name="key_modes_of_use" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putKeyAttributes.parameter.keyModesOfUse"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a>

key_modes_of_use block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_modes_of_use PaymentcryptographyKey#key_modes_of_use}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#create PaymentcryptographyKey#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#delete PaymentcryptographyKey#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#update PaymentcryptographyKey#update}

---

##### `reset_deletion_window_in_days` <a name="reset_deletion_window_in_days" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetDeletionWindowInDays"></a>

```python
def reset_deletion_window_in_days() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_key_attributes` <a name="reset_key_attributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetKeyAttributes"></a>

```python
def reset_key_attributes() -> None
```

##### `reset_key_check_value_algorithm` <a name="reset_key_check_value_algorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetKeyCheckValueAlgorithm"></a>

```python
def reset_key_check_value_algorithm() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PaymentcryptographyKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import paymentcryptography_key

paymentcryptographyKey.PaymentcryptographyKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import paymentcryptography_key

paymentcryptographyKey.PaymentcryptographyKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import paymentcryptography_key

paymentcryptographyKey.PaymentcryptographyKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import paymentcryptography_key

paymentcryptographyKey.PaymentcryptographyKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PaymentcryptographyKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PaymentcryptographyKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PaymentcryptographyKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PaymentcryptographyKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyAttributes">key_attributes</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference">PaymentcryptographyKeyKeyAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValue">key_check_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyOrigin">key_origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyState">key_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference">PaymentcryptographyKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.deletionWindowInDaysInput">deletion_window_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.exportableInput">exportable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyAttributesInput">key_attributes_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValueAlgorithmInput">key_check_value_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.deletionWindowInDays">deletion_window_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.exportable">exportable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValueAlgorithm">key_check_value_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_attributes`<sup>Required</sup> <a name="key_attributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyAttributes"></a>

```python
key_attributes: PaymentcryptographyKeyKeyAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference">PaymentcryptographyKeyKeyAttributesOutputReference</a>

---

##### `key_check_value`<sup>Required</sup> <a name="key_check_value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValue"></a>

```python
key_check_value: str
```

- *Type:* str

---

##### `key_origin`<sup>Required</sup> <a name="key_origin" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyOrigin"></a>

```python
key_origin: str
```

- *Type:* str

---

##### `key_state`<sup>Required</sup> <a name="key_state" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyState"></a>

```python
key_state: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.timeouts"></a>

```python
timeouts: PaymentcryptographyKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference">PaymentcryptographyKeyTimeoutsOutputReference</a>

---

##### `deletion_window_in_days_input`<sup>Optional</sup> <a name="deletion_window_in_days_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.deletionWindowInDaysInput"></a>

```python
deletion_window_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exportable_input`<sup>Optional</sup> <a name="exportable_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.exportableInput"></a>

```python
exportable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_attributes_input`<sup>Optional</sup> <a name="key_attributes_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyAttributesInput"></a>

```python
key_attributes_input: typing.Union[IResolvable, PaymentcryptographyKeyKeyAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a>]

---

##### `key_check_value_algorithm_input`<sup>Optional</sup> <a name="key_check_value_algorithm_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValueAlgorithmInput"></a>

```python
key_check_value_algorithm_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PaymentcryptographyKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a>]

---

##### `deletion_window_in_days`<sup>Required</sup> <a name="deletion_window_in_days" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.deletionWindowInDays"></a>

```python
deletion_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.exportable"></a>

```python
exportable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_check_value_algorithm`<sup>Required</sup> <a name="key_check_value_algorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValueAlgorithm"></a>

```python
key_check_value_algorithm: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PaymentcryptographyKeyConfig <a name="PaymentcryptographyKeyConfig" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import paymentcryptography_key

paymentcryptographyKey.PaymentcryptographyKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  exportable: typing.Union[bool, IResolvable],
  deletion_window_in_days: typing.Union[int, float] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  key_attributes: PaymentcryptographyKeyKeyAttributes = None,
  key_check_value_algorithm: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: PaymentcryptographyKeyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.exportable">exportable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#exportable PaymentcryptographyKey#exportable}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.deletionWindowInDays">deletion_window_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#deletion_window_in_days PaymentcryptographyKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#enabled PaymentcryptographyKey#enabled}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.keyAttributes">key_attributes</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a></code> | key_attributes block. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.keyCheckValueAlgorithm">key_check_value_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_check_value_algorithm PaymentcryptographyKey#key_check_value_algorithm}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#tags PaymentcryptographyKey#tags}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.exportable"></a>

```python
exportable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#exportable PaymentcryptographyKey#exportable}.

---

##### `deletion_window_in_days`<sup>Optional</sup> <a name="deletion_window_in_days" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.deletionWindowInDays"></a>

```python
deletion_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#deletion_window_in_days PaymentcryptographyKey#deletion_window_in_days}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#enabled PaymentcryptographyKey#enabled}.

---

##### `key_attributes`<sup>Optional</sup> <a name="key_attributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.keyAttributes"></a>

```python
key_attributes: PaymentcryptographyKeyKeyAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a>

key_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_attributes PaymentcryptographyKey#key_attributes}

---

##### `key_check_value_algorithm`<sup>Optional</sup> <a name="key_check_value_algorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.keyCheckValueAlgorithm"></a>

```python
key_check_value_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_check_value_algorithm PaymentcryptographyKey#key_check_value_algorithm}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#tags PaymentcryptographyKey#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.timeouts"></a>

```python
timeouts: PaymentcryptographyKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#timeouts PaymentcryptographyKey#timeouts}

---

### PaymentcryptographyKeyKeyAttributes <a name="PaymentcryptographyKeyKeyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import paymentcryptography_key

paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes(
  key_algorithm: str,
  key_class: str,
  key_usage: str,
  key_modes_of_use: PaymentcryptographyKeyKeyAttributesKeyModesOfUse = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_algorithm PaymentcryptographyKey#key_algorithm}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyClass">key_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_class PaymentcryptographyKey#key_class}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyUsage">key_usage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_usage PaymentcryptographyKey#key_usage}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyModesOfUse">key_modes_of_use</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a></code> | key_modes_of_use block. |

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_algorithm PaymentcryptographyKey#key_algorithm}.

---

##### `key_class`<sup>Required</sup> <a name="key_class" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyClass"></a>

```python
key_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_class PaymentcryptographyKey#key_class}.

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyUsage"></a>

```python
key_usage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_usage PaymentcryptographyKey#key_usage}.

---

##### `key_modes_of_use`<sup>Optional</sup> <a name="key_modes_of_use" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyModesOfUse"></a>

```python
key_modes_of_use: PaymentcryptographyKeyKeyAttributesKeyModesOfUse
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a>

key_modes_of_use block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#key_modes_of_use PaymentcryptographyKey#key_modes_of_use}

---

### PaymentcryptographyKeyKeyAttributesKeyModesOfUse <a name="PaymentcryptographyKeyKeyAttributesKeyModesOfUse" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import paymentcryptography_key

paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse(
  decrypt: typing.Union[bool, IResolvable] = None,
  derive_key: typing.Union[bool, IResolvable] = None,
  encrypt: typing.Union[bool, IResolvable] = None,
  generate: typing.Union[bool, IResolvable] = None,
  no_restrictions: typing.Union[bool, IResolvable] = None,
  sign: typing.Union[bool, IResolvable] = None,
  unwrap: typing.Union[bool, IResolvable] = None,
  verify: typing.Union[bool, IResolvable] = None,
  wrap: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.decrypt">decrypt</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#decrypt PaymentcryptographyKey#decrypt}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.deriveKey">derive_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#derive_key PaymentcryptographyKey#derive_key}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.encrypt">encrypt</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#encrypt PaymentcryptographyKey#encrypt}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.generate">generate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#generate PaymentcryptographyKey#generate}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.noRestrictions">no_restrictions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#no_restrictions PaymentcryptographyKey#no_restrictions}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.sign">sign</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#sign PaymentcryptographyKey#sign}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.unwrap">unwrap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#unwrap PaymentcryptographyKey#unwrap}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.verify">verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#verify PaymentcryptographyKey#verify}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.wrap">wrap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#wrap PaymentcryptographyKey#wrap}. |

---

##### `decrypt`<sup>Optional</sup> <a name="decrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.decrypt"></a>

```python
decrypt: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#decrypt PaymentcryptographyKey#decrypt}.

---

##### `derive_key`<sup>Optional</sup> <a name="derive_key" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.deriveKey"></a>

```python
derive_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#derive_key PaymentcryptographyKey#derive_key}.

---

##### `encrypt`<sup>Optional</sup> <a name="encrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.encrypt"></a>

```python
encrypt: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#encrypt PaymentcryptographyKey#encrypt}.

---

##### `generate`<sup>Optional</sup> <a name="generate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.generate"></a>

```python
generate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#generate PaymentcryptographyKey#generate}.

---

##### `no_restrictions`<sup>Optional</sup> <a name="no_restrictions" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.noRestrictions"></a>

```python
no_restrictions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#no_restrictions PaymentcryptographyKey#no_restrictions}.

---

##### `sign`<sup>Optional</sup> <a name="sign" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.sign"></a>

```python
sign: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#sign PaymentcryptographyKey#sign}.

---

##### `unwrap`<sup>Optional</sup> <a name="unwrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.unwrap"></a>

```python
unwrap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#unwrap PaymentcryptographyKey#unwrap}.

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.verify"></a>

```python
verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#verify PaymentcryptographyKey#verify}.

---

##### `wrap`<sup>Optional</sup> <a name="wrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.wrap"></a>

```python
wrap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#wrap PaymentcryptographyKey#wrap}.

---

### PaymentcryptographyKeyTimeouts <a name="PaymentcryptographyKeyTimeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import paymentcryptography_key

paymentcryptographyKey.PaymentcryptographyKeyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#create PaymentcryptographyKey#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#delete PaymentcryptographyKey#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#update PaymentcryptographyKey#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference <a name="PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import paymentcryptography_key

paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetDecrypt">reset_decrypt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetDeriveKey">reset_derive_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetEncrypt">reset_encrypt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetGenerate">reset_generate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetNoRestrictions">reset_no_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetSign">reset_sign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetUnwrap">reset_unwrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetVerify">reset_verify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetWrap">reset_wrap</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_decrypt` <a name="reset_decrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetDecrypt"></a>

```python
def reset_decrypt() -> None
```

##### `reset_derive_key` <a name="reset_derive_key" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetDeriveKey"></a>

```python
def reset_derive_key() -> None
```

##### `reset_encrypt` <a name="reset_encrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetEncrypt"></a>

```python
def reset_encrypt() -> None
```

##### `reset_generate` <a name="reset_generate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetGenerate"></a>

```python
def reset_generate() -> None
```

##### `reset_no_restrictions` <a name="reset_no_restrictions" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetNoRestrictions"></a>

```python
def reset_no_restrictions() -> None
```

##### `reset_sign` <a name="reset_sign" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetSign"></a>

```python
def reset_sign() -> None
```

##### `reset_unwrap` <a name="reset_unwrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetUnwrap"></a>

```python
def reset_unwrap() -> None
```

##### `reset_verify` <a name="reset_verify" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetVerify"></a>

```python
def reset_verify() -> None
```

##### `reset_wrap` <a name="reset_wrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetWrap"></a>

```python
def reset_wrap() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decryptInput">decrypt_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKeyInput">derive_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encryptInput">encrypt_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generateInput">generate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictionsInput">no_restrictions_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.signInput">sign_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrapInput">unwrap_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verifyInput">verify_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrapInput">wrap_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decrypt">decrypt</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKey">derive_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encrypt">encrypt</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generate">generate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictions">no_restrictions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.sign">sign</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrap">unwrap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verify">verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrap">wrap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `decrypt_input`<sup>Optional</sup> <a name="decrypt_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decryptInput"></a>

```python
decrypt_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `derive_key_input`<sup>Optional</sup> <a name="derive_key_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKeyInput"></a>

```python
derive_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encrypt_input`<sup>Optional</sup> <a name="encrypt_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encryptInput"></a>

```python
encrypt_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `generate_input`<sup>Optional</sup> <a name="generate_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generateInput"></a>

```python
generate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_restrictions_input`<sup>Optional</sup> <a name="no_restrictions_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictionsInput"></a>

```python
no_restrictions_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sign_input`<sup>Optional</sup> <a name="sign_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.signInput"></a>

```python
sign_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unwrap_input`<sup>Optional</sup> <a name="unwrap_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrapInput"></a>

```python
unwrap_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `verify_input`<sup>Optional</sup> <a name="verify_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verifyInput"></a>

```python
verify_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `wrap_input`<sup>Optional</sup> <a name="wrap_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrapInput"></a>

```python
wrap_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `decrypt`<sup>Required</sup> <a name="decrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decrypt"></a>

```python
decrypt: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `derive_key`<sup>Required</sup> <a name="derive_key" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKey"></a>

```python
derive_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encrypt`<sup>Required</sup> <a name="encrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encrypt"></a>

```python
encrypt: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `generate`<sup>Required</sup> <a name="generate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generate"></a>

```python
generate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `no_restrictions`<sup>Required</sup> <a name="no_restrictions" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictions"></a>

```python
no_restrictions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sign`<sup>Required</sup> <a name="sign" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.sign"></a>

```python
sign: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unwrap`<sup>Required</sup> <a name="unwrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrap"></a>

```python
unwrap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `verify`<sup>Required</sup> <a name="verify" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verify"></a>

```python
verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `wrap`<sup>Required</sup> <a name="wrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrap"></a>

```python
wrap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PaymentcryptographyKeyKeyAttributesKeyModesOfUse]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a>]

---


### PaymentcryptographyKeyKeyAttributesOutputReference <a name="PaymentcryptographyKeyKeyAttributesOutputReference" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import paymentcryptography_key

paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse">put_key_modes_of_use</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resetKeyModesOfUse">reset_key_modes_of_use</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_key_modes_of_use` <a name="put_key_modes_of_use" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse"></a>

```python
def put_key_modes_of_use(
  decrypt: typing.Union[bool, IResolvable] = None,
  derive_key: typing.Union[bool, IResolvable] = None,
  encrypt: typing.Union[bool, IResolvable] = None,
  generate: typing.Union[bool, IResolvable] = None,
  no_restrictions: typing.Union[bool, IResolvable] = None,
  sign: typing.Union[bool, IResolvable] = None,
  unwrap: typing.Union[bool, IResolvable] = None,
  verify: typing.Union[bool, IResolvable] = None,
  wrap: typing.Union[bool, IResolvable] = None
) -> None
```

###### `decrypt`<sup>Optional</sup> <a name="decrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse.parameter.decrypt"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#decrypt PaymentcryptographyKey#decrypt}.

---

###### `derive_key`<sup>Optional</sup> <a name="derive_key" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse.parameter.deriveKey"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#derive_key PaymentcryptographyKey#derive_key}.

---

###### `encrypt`<sup>Optional</sup> <a name="encrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse.parameter.encrypt"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#encrypt PaymentcryptographyKey#encrypt}.

---

###### `generate`<sup>Optional</sup> <a name="generate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse.parameter.generate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#generate PaymentcryptographyKey#generate}.

---

###### `no_restrictions`<sup>Optional</sup> <a name="no_restrictions" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse.parameter.noRestrictions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#no_restrictions PaymentcryptographyKey#no_restrictions}.

---

###### `sign`<sup>Optional</sup> <a name="sign" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse.parameter.sign"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#sign PaymentcryptographyKey#sign}.

---

###### `unwrap`<sup>Optional</sup> <a name="unwrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse.parameter.unwrap"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#unwrap PaymentcryptographyKey#unwrap}.

---

###### `verify`<sup>Optional</sup> <a name="verify" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse.parameter.verify"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#verify PaymentcryptographyKey#verify}.

---

###### `wrap`<sup>Optional</sup> <a name="wrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse.parameter.wrap"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.1/docs/resources/paymentcryptography_key#wrap PaymentcryptographyKey#wrap}.

---

##### `reset_key_modes_of_use` <a name="reset_key_modes_of_use" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resetKeyModesOfUse"></a>

```python
def reset_key_modes_of_use() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUse">key_modes_of_use</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference">PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithmInput">key_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyClassInput">key_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUseInput">key_modes_of_use_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsageInput">key_usage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyClass">key_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsage">key_usage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_modes_of_use`<sup>Required</sup> <a name="key_modes_of_use" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUse"></a>

```python
key_modes_of_use: PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference">PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference</a>

---

##### `key_algorithm_input`<sup>Optional</sup> <a name="key_algorithm_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithmInput"></a>

```python
key_algorithm_input: str
```

- *Type:* str

---

##### `key_class_input`<sup>Optional</sup> <a name="key_class_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyClassInput"></a>

```python
key_class_input: str
```

- *Type:* str

---

##### `key_modes_of_use_input`<sup>Optional</sup> <a name="key_modes_of_use_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUseInput"></a>

```python
key_modes_of_use_input: typing.Union[IResolvable, PaymentcryptographyKeyKeyAttributesKeyModesOfUse]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a>]

---

##### `key_usage_input`<sup>Optional</sup> <a name="key_usage_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsageInput"></a>

```python
key_usage_input: str
```

- *Type:* str

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

---

##### `key_class`<sup>Required</sup> <a name="key_class" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyClass"></a>

```python
key_class: str
```

- *Type:* str

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsage"></a>

```python
key_usage: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PaymentcryptographyKeyKeyAttributes]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a>]

---


### PaymentcryptographyKeyTimeoutsOutputReference <a name="PaymentcryptographyKeyTimeoutsOutputReference" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import paymentcryptography_key

paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PaymentcryptographyKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a>]

---



