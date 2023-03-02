# `dataAwsBatchSchedulingPolicy` Submodule <a name="`dataAwsBatchSchedulingPolicy` Submodule" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBatchSchedulingPolicy <a name="DataAwsBatchSchedulingPolicy" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy aws_batch_scheduling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_batch_scheduling_policy

dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy#arn DataAwsBatchSchedulingPolicy#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy#id DataAwsBatchSchedulingPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy#tags DataAwsBatchSchedulingPolicy#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy#arn DataAwsBatchSchedulingPolicy#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy#id DataAwsBatchSchedulingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy#tags DataAwsBatchSchedulingPolicy#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_batch_scheduling_policy

dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_batch_scheduling_policy

dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_batch_scheduling_policy

dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.fairSharePolicy">fair_share_policy</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList">DataAwsBatchSchedulingPolicyFairSharePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `fair_share_policy`<sup>Required</sup> <a name="fair_share_policy" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.fairSharePolicy"></a>

```python
fair_share_policy: DataAwsBatchSchedulingPolicyFairSharePolicyList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList">DataAwsBatchSchedulingPolicyFairSharePolicyList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBatchSchedulingPolicyConfig <a name="DataAwsBatchSchedulingPolicyConfig" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_batch_scheduling_policy

dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy#arn DataAwsBatchSchedulingPolicy#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy#id DataAwsBatchSchedulingPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy#tags DataAwsBatchSchedulingPolicy#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy#arn DataAwsBatchSchedulingPolicy#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy#id DataAwsBatchSchedulingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_scheduling_policy#tags DataAwsBatchSchedulingPolicy#tags}.

---

### DataAwsBatchSchedulingPolicyFairSharePolicy <a name="DataAwsBatchSchedulingPolicyFairSharePolicy" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_batch_scheduling_policy

dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicy()
```


### DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution <a name="DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_batch_scheduling_policy

dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBatchSchedulingPolicyFairSharePolicyList <a name="DataAwsBatchSchedulingPolicyFairSharePolicyList" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_batch_scheduling_policy

dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference <a name="DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_batch_scheduling_policy

dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservation">compute_reservation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySeconds">share_decay_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistribution">share_distribution</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList">DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicy">DataAwsBatchSchedulingPolicyFairSharePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_reservation`<sup>Required</sup> <a name="compute_reservation" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.computeReservation"></a>

```python
compute_reservation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `share_decay_seconds`<sup>Required</sup> <a name="share_decay_seconds" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDecaySeconds"></a>

```python
share_decay_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `share_distribution`<sup>Required</sup> <a name="share_distribution" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.shareDistribution"></a>

```python
share_distribution: DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList">DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsBatchSchedulingPolicyFairSharePolicy
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicy">DataAwsBatchSchedulingPolicyFairSharePolicy</a>

---


### DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList <a name="DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_batch_scheduling_policy

dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference <a name="DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_batch_scheduling_policy

dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifier">share_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactor">weight_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution">DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `share_identifier`<sup>Required</sup> <a name="share_identifier" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.shareIdentifier"></a>

```python
share_identifier: str
```

- *Type:* str

---

##### `weight_factor`<sup>Required</sup> <a name="weight_factor" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.weightFactor"></a>

```python
weight_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBatchSchedulingPolicy.DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution">DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution</a>

---



