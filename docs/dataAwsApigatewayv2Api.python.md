# `dataAwsApigatewayv2Api` Submodule <a name="`dataAwsApigatewayv2Api` Submodule" id="@cdktf/provider-aws.dataAwsApigatewayv2Api"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApigatewayv2Api <a name="DataAwsApigatewayv2Api" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api aws_apigatewayv2_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_api

dataAwsApigatewayv2Api.DataAwsApigatewayv2Api(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#api_id DataAwsApigatewayv2Api#api_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#id DataAwsApigatewayv2Api#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#tags DataAwsApigatewayv2Api#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.apiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#api_id DataAwsApigatewayv2Api#api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#id DataAwsApigatewayv2Api#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#tags DataAwsApigatewayv2Api#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_api

dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_api

dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_api

dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiEndpoint">api_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiKeySelectionExpression">api_key_selection_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.corsConfiguration">cors_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList">DataAwsApigatewayv2ApiCorsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.disableExecuteApiEndpoint">disable_execute_api_endpoint</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.executionArn">execution_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.protocolType">protocol_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.routeSelectionExpression">route_selection_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `api_endpoint`<sup>Required</sup> <a name="api_endpoint" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiEndpoint"></a>

```python
api_endpoint: str
```

- *Type:* str

---

##### `api_key_selection_expression`<sup>Required</sup> <a name="api_key_selection_expression" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiKeySelectionExpression"></a>

```python
api_key_selection_expression: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cors_configuration`<sup>Required</sup> <a name="cors_configuration" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.corsConfiguration"></a>

```python
cors_configuration: DataAwsApigatewayv2ApiCorsConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList">DataAwsApigatewayv2ApiCorsConfigurationList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_execute_api_endpoint`<sup>Required</sup> <a name="disable_execute_api_endpoint" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.disableExecuteApiEndpoint"></a>

```python
disable_execute_api_endpoint: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `execution_arn`<sup>Required</sup> <a name="execution_arn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.executionArn"></a>

```python
execution_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol_type`<sup>Required</sup> <a name="protocol_type" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

---

##### `route_selection_expression`<sup>Required</sup> <a name="route_selection_expression" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.routeSelectionExpression"></a>

```python
route_selection_expression: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2Api.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApigatewayv2ApiConfig <a name="DataAwsApigatewayv2ApiConfig" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_api

dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#api_id DataAwsApigatewayv2Api#api_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#id DataAwsApigatewayv2Api#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#tags DataAwsApigatewayv2Api#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#api_id DataAwsApigatewayv2Api#api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#id DataAwsApigatewayv2Api#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_api#tags DataAwsApigatewayv2Api#tags}.

---

### DataAwsApigatewayv2ApiCorsConfiguration <a name="DataAwsApigatewayv2ApiCorsConfiguration" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_api

dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsApigatewayv2ApiCorsConfigurationList <a name="DataAwsApigatewayv2ApiCorsConfigurationList" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_api

dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsApigatewayv2ApiCorsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsApigatewayv2ApiCorsConfigurationOutputReference <a name="DataAwsApigatewayv2ApiCorsConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_api

dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials">allow_credentials</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders">allow_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods">allow_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins">allow_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfiguration">DataAwsApigatewayv2ApiCorsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_credentials`<sup>Required</sup> <a name="allow_credentials" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowCredentials"></a>

```python
allow_credentials: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allow_headers`<sup>Required</sup> <a name="allow_headers" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowHeaders"></a>

```python
allow_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_methods`<sup>Required</sup> <a name="allow_methods" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowMethods"></a>

```python
allow_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_origins`<sup>Required</sup> <a name="allow_origins" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.allowOrigins"></a>

```python
allow_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers`<sup>Required</sup> <a name="expose_headers" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsApigatewayv2ApiCorsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApigatewayv2Api.DataAwsApigatewayv2ApiCorsConfiguration">DataAwsApigatewayv2ApiCorsConfiguration</a>

---



