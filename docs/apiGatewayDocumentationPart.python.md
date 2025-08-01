# `apiGatewayDocumentationPart` Submodule <a name="`apiGatewayDocumentationPart` Submodule" id="@cdktf/provider-aws.apiGatewayDocumentationPart"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayDocumentationPart <a name="ApiGatewayDocumentationPart" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part aws_api_gateway_documentation_part}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_documentation_part

apiGatewayDocumentationPart.ApiGatewayDocumentationPart(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: ApiGatewayDocumentationPartLocation,
  properties: str,
  rest_api_id: str,
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | location block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.properties">properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#properties ApiGatewayDocumentationPart#properties}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#rest_api_id ApiGatewayDocumentationPart#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#id ApiGatewayDocumentationPart#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#location ApiGatewayDocumentationPart#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.properties"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#properties ApiGatewayDocumentationPart#properties}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.restApiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#rest_api_id ApiGatewayDocumentationPart#rest_api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#id ApiGatewayDocumentationPart#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#region ApiGatewayDocumentationPart#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation">put_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_location` <a name="put_location" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation"></a>

```python
def put_location(
  type: str,
  method: str = None,
  name: str = None,
  path: str = None,
  status_code: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#type ApiGatewayDocumentationPart#type}.

---

###### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation.parameter.method"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#method ApiGatewayDocumentationPart#method}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#name ApiGatewayDocumentationPart#name}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#path ApiGatewayDocumentationPart#path}.

---

###### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation.parameter.statusCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#status_code ApiGatewayDocumentationPart#status_code}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApiGatewayDocumentationPart resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_documentation_part

apiGatewayDocumentationPart.ApiGatewayDocumentationPart.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_documentation_part

apiGatewayDocumentationPart.ApiGatewayDocumentationPart.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_documentation_part

apiGatewayDocumentationPart.ApiGatewayDocumentationPart.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_documentation_part

apiGatewayDocumentationPart.ApiGatewayDocumentationPart.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApiGatewayDocumentationPart resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiGatewayDocumentationPart to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiGatewayDocumentationPart that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiGatewayDocumentationPart to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.documentationPartId">documentation_part_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.location">location</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference">ApiGatewayDocumentationPartLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.locationInput">location_input</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.propertiesInput">properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiIdInput">rest_api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.properties">properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `documentation_part_id`<sup>Required</sup> <a name="documentation_part_id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.documentationPartId"></a>

```python
documentation_part_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.location"></a>

```python
location: ApiGatewayDocumentationPartLocationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference">ApiGatewayDocumentationPartLocationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.locationInput"></a>

```python
location_input: ApiGatewayDocumentationPartLocation
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.propertiesInput"></a>

```python
properties_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `rest_api_id_input`<sup>Optional</sup> <a name="rest_api_id_input" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiIdInput"></a>

```python
rest_api_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.properties"></a>

```python
properties: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayDocumentationPartConfig <a name="ApiGatewayDocumentationPartConfig" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_documentation_part

apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: ApiGatewayDocumentationPartLocation,
  properties: str,
  rest_api_id: str,
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.location">location</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | location block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.properties">properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#properties ApiGatewayDocumentationPart#properties}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#rest_api_id ApiGatewayDocumentationPart#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#id ApiGatewayDocumentationPart#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.location"></a>

```python
location: ApiGatewayDocumentationPartLocation
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#location ApiGatewayDocumentationPart#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.properties"></a>

```python
properties: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#properties ApiGatewayDocumentationPart#properties}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#rest_api_id ApiGatewayDocumentationPart#rest_api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#id ApiGatewayDocumentationPart#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#region ApiGatewayDocumentationPart#region}

---

### ApiGatewayDocumentationPartLocation <a name="ApiGatewayDocumentationPartLocation" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_documentation_part

apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation(
  type: str,
  method: str = None,
  name: str = None,
  path: str = None,
  status_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#type ApiGatewayDocumentationPart#type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.method">method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#method ApiGatewayDocumentationPart#method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#name ApiGatewayDocumentationPart#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#path ApiGatewayDocumentationPart#path}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.statusCode">status_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#status_code ApiGatewayDocumentationPart#status_code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#type ApiGatewayDocumentationPart#type}.

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.method"></a>

```python
method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#method ApiGatewayDocumentationPart#method}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#name ApiGatewayDocumentationPart#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#path ApiGatewayDocumentationPart#path}.

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/api_gateway_documentation_part#status_code ApiGatewayDocumentationPart#status_code}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayDocumentationPartLocationOutputReference <a name="ApiGatewayDocumentationPartLocationOutputReference" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_documentation_part

apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_method` <a name="reset_method" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCodeInput"></a>

```python
status_code_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.internalValue"></a>

```python
internal_value: ApiGatewayDocumentationPartLocation
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

---



