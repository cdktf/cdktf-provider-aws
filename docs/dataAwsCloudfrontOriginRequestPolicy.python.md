# `dataAwsCloudfrontOriginRequestPolicy` Submodule <a name="`dataAwsCloudfrontOriginRequestPolicy` Submodule" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontOriginRequestPolicy <a name="DataAwsCloudfrontOriginRequestPolicy" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy aws_cloudfront_origin_request_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy#id DataAwsCloudfrontOriginRequestPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy#name DataAwsCloudfrontOriginRequestPolicy#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy#id DataAwsCloudfrontOriginRequestPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy#name DataAwsCloudfrontOriginRequestPolicy#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.cookiesConfig">cookies_config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList">DataAwsCloudfrontOriginRequestPolicyCookiesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.headersConfig">headers_config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList">DataAwsCloudfrontOriginRequestPolicyHeadersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.queryStringsConfig">query_strings_config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `cookies_config`<sup>Required</sup> <a name="cookies_config" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.cookiesConfig"></a>

```python
cookies_config: DataAwsCloudfrontOriginRequestPolicyCookiesConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList">DataAwsCloudfrontOriginRequestPolicyCookiesConfigList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `headers_config`<sup>Required</sup> <a name="headers_config" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.headersConfig"></a>

```python
headers_config: DataAwsCloudfrontOriginRequestPolicyHeadersConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList">DataAwsCloudfrontOriginRequestPolicyHeadersConfigList</a>

---

##### `query_strings_config`<sup>Required</sup> <a name="query_strings_config" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.queryStringsConfig"></a>

```python
query_strings_config: DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontOriginRequestPolicyConfig <a name="DataAwsCloudfrontOriginRequestPolicyConfig" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy#id DataAwsCloudfrontOriginRequestPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy#name DataAwsCloudfrontOriginRequestPolicy#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy#id DataAwsCloudfrontOriginRequestPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_origin_request_policy#name DataAwsCloudfrontOriginRequestPolicy#name}.

---

### DataAwsCloudfrontOriginRequestPolicyCookiesConfig <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfig" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfig()
```


### DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies()
```


### DataAwsCloudfrontOriginRequestPolicyHeadersConfig <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfig" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfig()
```


### DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders()
```


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig()
```


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies">DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies">DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookies</a>

---


### DataAwsCloudfrontOriginRequestPolicyCookiesConfigList <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfigList" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehavior">cookie_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookies">cookies</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList">DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfig">DataAwsCloudfrontOriginRequestPolicyCookiesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie_behavior`<sup>Required</sup> <a name="cookie_behavior" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehavior"></a>

```python
cookie_behavior: str
```

- *Type:* str

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookies"></a>

```python
cookies: DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList">DataAwsCloudfrontOriginRequestPolicyCookiesConfigCookiesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontOriginRequestPolicyCookiesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyCookiesConfig">DataAwsCloudfrontOriginRequestPolicyCookiesConfig</a>

---


### DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders">DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders">DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeaders</a>

---


### DataAwsCloudfrontOriginRequestPolicyHeadersConfigList <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfigList" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehavior">header_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList">DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfig">DataAwsCloudfrontOriginRequestPolicyHeadersConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_behavior`<sup>Required</sup> <a name="header_behavior" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehavior"></a>

```python
header_behavior: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headers"></a>

```python
headers: DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList">DataAwsCloudfrontOriginRequestPolicyHeadersConfigHeadersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontOriginRequestPolicyHeadersConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyHeadersConfig">DataAwsCloudfrontOriginRequestPolicyHeadersConfig</a>

---


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehavior">query_string_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStrings">query_strings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_string_behavior`<sup>Required</sup> <a name="query_string_behavior" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehavior"></a>

```python
query_string_behavior: str
```

- *Type:* str

---

##### `query_strings`<sup>Required</sup> <a name="query_strings" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStrings"></a>

```python
query_strings: DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfig</a>

---


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference <a name="DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_origin_request_policy

dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontOriginRequestPolicy.DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">DataAwsCloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a>

---



