# `securityhubStandardsControl` Submodule <a name="`securityhubStandardsControl` Submodule" id="@cdktf/provider-aws.securityhubStandardsControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubStandardsControl <a name="SecurityhubStandardsControl" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control aws_securityhub_standards_control}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_standards_control

securityhubStandardsControl.SecurityhubStandardsControl(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  control_status: str,
  standards_control_arn: str,
  disabled_reason: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.controlStatus">control_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#control_status SecurityhubStandardsControl#control_status}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.standardsControlArn">standards_control_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#standards_control_arn SecurityhubStandardsControl#standards_control_arn}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.disabledReason">disabled_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#disabled_reason SecurityhubStandardsControl#disabled_reason}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#id SecurityhubStandardsControl#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `control_status`<sup>Required</sup> <a name="control_status" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.controlStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#control_status SecurityhubStandardsControl#control_status}.

---

##### `standards_control_arn`<sup>Required</sup> <a name="standards_control_arn" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.standardsControlArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#standards_control_arn SecurityhubStandardsControl#standards_control_arn}.

---

##### `disabled_reason`<sup>Optional</sup> <a name="disabled_reason" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.disabledReason"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#disabled_reason SecurityhubStandardsControl#disabled_reason}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#id SecurityhubStandardsControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetDisabledReason">reset_disabled_reason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_disabled_reason` <a name="reset_disabled_reason" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetDisabledReason"></a>

```python
def reset_disabled_reason() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_standards_control

securityhubStandardsControl.SecurityhubStandardsControl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_standards_control

securityhubStandardsControl.SecurityhubStandardsControl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_standards_control

securityhubStandardsControl.SecurityhubStandardsControl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlId">control_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatusUpdatedAt">control_status_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.relatedRequirements">related_requirements</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.remediationUrl">remediation_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.severityRating">severity_rating</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatusInput">control_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.disabledReasonInput">disabled_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.standardsControlArnInput">standards_control_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatus">control_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.disabledReason">disabled_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.standardsControlArn">standards_control_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `control_id`<sup>Required</sup> <a name="control_id" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlId"></a>

```python
control_id: str
```

- *Type:* str

---

##### `control_status_updated_at`<sup>Required</sup> <a name="control_status_updated_at" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatusUpdatedAt"></a>

```python
control_status_updated_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `related_requirements`<sup>Required</sup> <a name="related_requirements" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.relatedRequirements"></a>

```python
related_requirements: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `remediation_url`<sup>Required</sup> <a name="remediation_url" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.remediationUrl"></a>

```python
remediation_url: str
```

- *Type:* str

---

##### `severity_rating`<sup>Required</sup> <a name="severity_rating" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.severityRating"></a>

```python
severity_rating: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `control_status_input`<sup>Optional</sup> <a name="control_status_input" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatusInput"></a>

```python
control_status_input: str
```

- *Type:* str

---

##### `disabled_reason_input`<sup>Optional</sup> <a name="disabled_reason_input" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.disabledReasonInput"></a>

```python
disabled_reason_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `standards_control_arn_input`<sup>Optional</sup> <a name="standards_control_arn_input" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.standardsControlArnInput"></a>

```python
standards_control_arn_input: str
```

- *Type:* str

---

##### `control_status`<sup>Required</sup> <a name="control_status" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.controlStatus"></a>

```python
control_status: str
```

- *Type:* str

---

##### `disabled_reason`<sup>Required</sup> <a name="disabled_reason" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.disabledReason"></a>

```python
disabled_reason: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `standards_control_arn`<sup>Required</sup> <a name="standards_control_arn" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.standardsControlArn"></a>

```python
standards_control_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubStandardsControlConfig <a name="SecurityhubStandardsControlConfig" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_standards_control

securityhubStandardsControl.SecurityhubStandardsControlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  control_status: str,
  standards_control_arn: str,
  disabled_reason: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.controlStatus">control_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#control_status SecurityhubStandardsControl#control_status}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.standardsControlArn">standards_control_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#standards_control_arn SecurityhubStandardsControl#standards_control_arn}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.disabledReason">disabled_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#disabled_reason SecurityhubStandardsControl#disabled_reason}. |
| <code><a href="#@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#id SecurityhubStandardsControl#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `control_status`<sup>Required</sup> <a name="control_status" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.controlStatus"></a>

```python
control_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#control_status SecurityhubStandardsControl#control_status}.

---

##### `standards_control_arn`<sup>Required</sup> <a name="standards_control_arn" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.standardsControlArn"></a>

```python
standards_control_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#standards_control_arn SecurityhubStandardsControl#standards_control_arn}.

---

##### `disabled_reason`<sup>Optional</sup> <a name="disabled_reason" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.disabledReason"></a>

```python
disabled_reason: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#disabled_reason SecurityhubStandardsControl#disabled_reason}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.securityhubStandardsControl.SecurityhubStandardsControlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#id SecurityhubStandardsControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



