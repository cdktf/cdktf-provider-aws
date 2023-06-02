# `data_aws_ssmcontacts_plan`

Refer to the Terraform Registory for docs: [`data_aws_ssmcontacts_plan`](https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/ssmcontacts_plan).

# `dataAwsSsmcontactsPlan` Submodule <a name="`dataAwsSsmcontactsPlan` Submodule" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmcontactsPlan <a name="DataAwsSsmcontactsPlan" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/ssmcontacts_plan aws_ssmcontacts_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  contact_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.contactId">contact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/ssmcontacts_plan#contact_id DataAwsSsmcontactsPlan#contact_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/ssmcontacts_plan#id DataAwsSsmcontactsPlan#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.contactId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/ssmcontacts_plan#contact_id DataAwsSsmcontactsPlan#contact_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/ssmcontacts_plan#id DataAwsSsmcontactsPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.stage">stage</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList">DataAwsSsmcontactsPlanStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.contactIdInput">contact_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.contactId">contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.stage"></a>

```python
stage: DataAwsSsmcontactsPlanStageList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList">DataAwsSsmcontactsPlanStageList</a>

---

##### `contact_id_input`<sup>Optional</sup> <a name="contact_id_input" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.contactIdInput"></a>

```python
contact_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmcontactsPlanConfig <a name="DataAwsSsmcontactsPlanConfig" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  contact_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.contactId">contact_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/ssmcontacts_plan#contact_id DataAwsSsmcontactsPlan#contact_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/ssmcontacts_plan#id DataAwsSsmcontactsPlan#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/ssmcontacts_plan#contact_id DataAwsSsmcontactsPlan#contact_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.67.0/docs/data-sources/ssmcontacts_plan#id DataAwsSsmcontactsPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsSsmcontactsPlanStage <a name="DataAwsSsmcontactsPlanStage" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStage()
```


### DataAwsSsmcontactsPlanStageTarget <a name="DataAwsSsmcontactsPlanStageTarget" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTarget()
```


### DataAwsSsmcontactsPlanStageTargetChannelTargetInfo <a name="DataAwsSsmcontactsPlanStageTargetChannelTargetInfo" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfo()
```


### DataAwsSsmcontactsPlanStageTargetContactTargetInfo <a name="DataAwsSsmcontactsPlanStageTargetContactTargetInfo" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfo()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmcontactsPlanStageList <a name="DataAwsSsmcontactsPlanStageList" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsmcontactsPlanStageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSsmcontactsPlanStageOutputReference <a name="DataAwsSsmcontactsPlanStageOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList">DataAwsSsmcontactsPlanStageTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStage">DataAwsSsmcontactsPlanStage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.target"></a>

```python
target: DataAwsSsmcontactsPlanStageTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList">DataAwsSsmcontactsPlanStageTargetList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSsmcontactsPlanStage
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStage">DataAwsSsmcontactsPlanStage</a>

---


### DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList <a name="DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference <a name="DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.contactChannelId">contact_channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.retryIntervalInMinutes">retry_interval_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfo">DataAwsSsmcontactsPlanStageTargetChannelTargetInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contact_channel_id`<sup>Required</sup> <a name="contact_channel_id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.contactChannelId"></a>

```python
contact_channel_id: str
```

- *Type:* str

---

##### `retry_interval_in_minutes`<sup>Required</sup> <a name="retry_interval_in_minutes" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.retryIntervalInMinutes"></a>

```python
retry_interval_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSsmcontactsPlanStageTargetChannelTargetInfo
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfo">DataAwsSsmcontactsPlanStageTargetChannelTargetInfo</a>

---


### DataAwsSsmcontactsPlanStageTargetContactTargetInfoList <a name="DataAwsSsmcontactsPlanStageTargetContactTargetInfoList" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference <a name="DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.contactId">contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.isEssential">is_essential</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfo">DataAwsSsmcontactsPlanStageTargetContactTargetInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contact_id`<sup>Required</sup> <a name="contact_id" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.contactId"></a>

```python
contact_id: str
```

- *Type:* str

---

##### `is_essential`<sup>Required</sup> <a name="is_essential" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.isEssential"></a>

```python
is_essential: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSsmcontactsPlanStageTargetContactTargetInfo
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfo">DataAwsSsmcontactsPlanStageTargetContactTargetInfo</a>

---


### DataAwsSsmcontactsPlanStageTargetList <a name="DataAwsSsmcontactsPlanStageTargetList" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsmcontactsPlanStageTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSsmcontactsPlanStageTargetOutputReference <a name="DataAwsSsmcontactsPlanStageTargetOutputReference" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssmcontacts_plan

dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.channelTargetInfo">channel_target_info</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList">DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.contactTargetInfo">contact_target_info</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList">DataAwsSsmcontactsPlanStageTargetContactTargetInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTarget">DataAwsSsmcontactsPlanStageTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_target_info`<sup>Required</sup> <a name="channel_target_info" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.channelTargetInfo"></a>

```python
channel_target_info: DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList">DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList</a>

---

##### `contact_target_info`<sup>Required</sup> <a name="contact_target_info" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.contactTargetInfo"></a>

```python
contact_target_info: DataAwsSsmcontactsPlanStageTargetContactTargetInfoList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetContactTargetInfoList">DataAwsSsmcontactsPlanStageTargetContactTargetInfoList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSsmcontactsPlanStageTarget
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmcontactsPlan.DataAwsSsmcontactsPlanStageTarget">DataAwsSsmcontactsPlanStageTarget</a>

---



