# `dataAwsApigatewayv2VpcLink` Submodule <a name="`dataAwsApigatewayv2VpcLink` Submodule" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApigatewayv2VpcLink <a name="DataAwsApigatewayv2VpcLink" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/apigatewayv2_vpc_link aws_apigatewayv2_vpc_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_vpc_link

dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_link_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.vpcLinkId">vpc_link_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/apigatewayv2_vpc_link#vpc_link_id DataAwsApigatewayv2VpcLink#vpc_link_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/apigatewayv2_vpc_link#id DataAwsApigatewayv2VpcLink#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/apigatewayv2_vpc_link#tags DataAwsApigatewayv2VpcLink#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_link_id`<sup>Required</sup> <a name="vpc_link_id" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.vpcLinkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/apigatewayv2_vpc_link#vpc_link_id DataAwsApigatewayv2VpcLink#vpc_link_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/apigatewayv2_vpc_link#id DataAwsApigatewayv2VpcLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/apigatewayv2_vpc_link#tags DataAwsApigatewayv2VpcLink#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsApigatewayv2VpcLink resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_vpc_link

dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_vpc_link

dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_vpc_link

dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_vpc_link

dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsApigatewayv2VpcLink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsApigatewayv2VpcLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsApigatewayv2VpcLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/apigatewayv2_vpc_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsApigatewayv2VpcLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.vpcLinkIdInput">vpc_link_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.vpcLinkId">vpc_link_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_link_id_input`<sup>Optional</sup> <a name="vpc_link_id_input" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.vpcLinkIdInput"></a>

```python
vpc_link_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_link_id`<sup>Required</sup> <a name="vpc_link_id" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.vpcLinkId"></a>

```python
vpc_link_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApigatewayv2VpcLinkConfig <a name="DataAwsApigatewayv2VpcLinkConfig" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_vpc_link

dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_link_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.vpcLinkId">vpc_link_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/apigatewayv2_vpc_link#vpc_link_id DataAwsApigatewayv2VpcLink#vpc_link_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/apigatewayv2_vpc_link#id DataAwsApigatewayv2VpcLink#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/apigatewayv2_vpc_link#tags DataAwsApigatewayv2VpcLink#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_link_id`<sup>Required</sup> <a name="vpc_link_id" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.vpcLinkId"></a>

```python
vpc_link_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/apigatewayv2_vpc_link#vpc_link_id DataAwsApigatewayv2VpcLink#vpc_link_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/apigatewayv2_vpc_link#id DataAwsApigatewayv2VpcLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsApigatewayv2VpcLink.DataAwsApigatewayv2VpcLinkConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/apigatewayv2_vpc_link#tags DataAwsApigatewayv2VpcLink#tags}.

---



