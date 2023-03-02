# `dataAwsSesv2DedicatedIpPool` Submodule <a name="`dataAwsSesv2DedicatedIpPool` Submodule" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSesv2DedicatedIpPool <a name="DataAwsSesv2DedicatedIpPool" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool aws_sesv2_dedicated_ip_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_dedicated_ip_pool

dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  pool_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.poolName">pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#pool_name DataAwsSesv2DedicatedIpPool#pool_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#id DataAwsSesv2DedicatedIpPool#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#tags DataAwsSesv2DedicatedIpPool#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pool_name`<sup>Required</sup> <a name="pool_name" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.poolName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#pool_name DataAwsSesv2DedicatedIpPool#pool_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#id DataAwsSesv2DedicatedIpPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#tags DataAwsSesv2DedicatedIpPool#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_dedicated_ip_pool

dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_dedicated_ip_pool

dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_dedicated_ip_pool

dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.dedicatedIps">dedicated_ips</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList">DataAwsSesv2DedicatedIpPoolDedicatedIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.scalingMode">scaling_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.poolNameInput">pool_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.poolName">pool_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `dedicated_ips`<sup>Required</sup> <a name="dedicated_ips" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.dedicatedIps"></a>

```python
dedicated_ips: DataAwsSesv2DedicatedIpPoolDedicatedIpsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList">DataAwsSesv2DedicatedIpPoolDedicatedIpsList</a>

---

##### `scaling_mode`<sup>Required</sup> <a name="scaling_mode" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.scalingMode"></a>

```python
scaling_mode: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `pool_name_input`<sup>Optional</sup> <a name="pool_name_input" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.poolNameInput"></a>

```python
pool_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pool_name`<sup>Required</sup> <a name="pool_name" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.poolName"></a>

```python
pool_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSesv2DedicatedIpPoolConfig <a name="DataAwsSesv2DedicatedIpPoolConfig" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_dedicated_ip_pool

dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  pool_name: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.poolName">pool_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#pool_name DataAwsSesv2DedicatedIpPool#pool_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#id DataAwsSesv2DedicatedIpPool#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#tags DataAwsSesv2DedicatedIpPool#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pool_name`<sup>Required</sup> <a name="pool_name" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.poolName"></a>

```python
pool_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#pool_name DataAwsSesv2DedicatedIpPool#pool_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#id DataAwsSesv2DedicatedIpPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#tags DataAwsSesv2DedicatedIpPool#tags}.

---

### DataAwsSesv2DedicatedIpPoolDedicatedIps <a name="DataAwsSesv2DedicatedIpPoolDedicatedIps" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIps.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_dedicated_ip_pool

dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIps()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSesv2DedicatedIpPoolDedicatedIpsList <a name="DataAwsSesv2DedicatedIpPoolDedicatedIpsList" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_dedicated_ip_pool

dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference <a name="DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_sesv2_dedicated_ip_pool

dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.warmupPercentage">warmup_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.warmupStatus">warmup_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIps">DataAwsSesv2DedicatedIpPoolDedicatedIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `warmup_percentage`<sup>Required</sup> <a name="warmup_percentage" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.warmupPercentage"></a>

```python
warmup_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warmup_status`<sup>Required</sup> <a name="warmup_status" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.warmupStatus"></a>

```python
warmup_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSesv2DedicatedIpPoolDedicatedIps
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIps">DataAwsSesv2DedicatedIpPoolDedicatedIps</a>

---



