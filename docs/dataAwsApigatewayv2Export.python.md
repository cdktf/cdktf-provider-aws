# `dataAwsApigatewayv2Export` Submodule <a name="`dataAwsApigatewayv2Export` Submodule" id="@cdktf/provider-aws.dataAwsApigatewayv2Export"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApigatewayv2Export <a name="DataAwsApigatewayv2Export" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export aws_apigatewayv2_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_export

dataAwsApigatewayv2Export.DataAwsApigatewayv2Export(
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
  output_type: str,
  specification: str,
  export_version: str = None,
  id: str = None,
  include_extensions: typing.Union[bool, IResolvable] = None,
  stage_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#api_id DataAwsApigatewayv2Export#api_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.outputType">output_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#output_type DataAwsApigatewayv2Export#output_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.specification">specification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#specification DataAwsApigatewayv2Export#specification}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.exportVersion">export_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#export_version DataAwsApigatewayv2Export#export_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#id DataAwsApigatewayv2Export#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.includeExtensions">include_extensions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#include_extensions DataAwsApigatewayv2Export#include_extensions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.stageName">stage_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#stage_name DataAwsApigatewayv2Export#stage_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.apiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#api_id DataAwsApigatewayv2Export#api_id}.

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.outputType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#output_type DataAwsApigatewayv2Export#output_type}.

---

##### `specification`<sup>Required</sup> <a name="specification" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.specification"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#specification DataAwsApigatewayv2Export#specification}.

---

##### `export_version`<sup>Optional</sup> <a name="export_version" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.exportVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#export_version DataAwsApigatewayv2Export#export_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#id DataAwsApigatewayv2Export#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_extensions`<sup>Optional</sup> <a name="include_extensions" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.includeExtensions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#include_extensions DataAwsApigatewayv2Export#include_extensions}.

---

##### `stage_name`<sup>Optional</sup> <a name="stage_name" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.Initializer.parameter.stageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#stage_name DataAwsApigatewayv2Export#stage_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetExportVersion">reset_export_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetIncludeExtensions">reset_include_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetStageName">reset_stage_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_export_version` <a name="reset_export_version" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetExportVersion"></a>

```python
def reset_export_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_extensions` <a name="reset_include_extensions" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetIncludeExtensions"></a>

```python
def reset_include_extensions() -> None
```

##### `reset_stage_name` <a name="reset_stage_name" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.resetStageName"></a>

```python
def reset_stage_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_export

dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_export

dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_export

dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.exportVersionInput">export_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.includeExtensionsInput">include_extensions_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.specificationInput">specification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.stageNameInput">stage_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.exportVersion">export_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.includeExtensions">include_extensions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.specification">specification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.stageName">stage_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `export_version_input`<sup>Optional</sup> <a name="export_version_input" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.exportVersionInput"></a>

```python
export_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_extensions_input`<sup>Optional</sup> <a name="include_extensions_input" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.includeExtensionsInput"></a>

```python
include_extensions_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `specification_input`<sup>Optional</sup> <a name="specification_input" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.specificationInput"></a>

```python
specification_input: str
```

- *Type:* str

---

##### `stage_name_input`<sup>Optional</sup> <a name="stage_name_input" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.stageNameInput"></a>

```python
stage_name_input: str
```

- *Type:* str

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `export_version`<sup>Required</sup> <a name="export_version" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.exportVersion"></a>

```python
export_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_extensions`<sup>Required</sup> <a name="include_extensions" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.includeExtensions"></a>

```python
include_extensions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `specification`<sup>Required</sup> <a name="specification" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.specification"></a>

```python
specification: str
```

- *Type:* str

---

##### `stage_name`<sup>Required</sup> <a name="stage_name" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.stageName"></a>

```python
stage_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2Export.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApigatewayv2ExportConfig <a name="DataAwsApigatewayv2ExportConfig" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_apigatewayv2_export

dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  output_type: str,
  specification: str,
  export_version: str = None,
  id: str = None,
  include_extensions: typing.Union[bool, IResolvable] = None,
  stage_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#api_id DataAwsApigatewayv2Export#api_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.outputType">output_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#output_type DataAwsApigatewayv2Export#output_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.specification">specification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#specification DataAwsApigatewayv2Export#specification}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.exportVersion">export_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#export_version DataAwsApigatewayv2Export#export_version}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#id DataAwsApigatewayv2Export#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.includeExtensions">include_extensions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#include_extensions DataAwsApigatewayv2Export#include_extensions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.stageName">stage_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#stage_name DataAwsApigatewayv2Export#stage_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#api_id DataAwsApigatewayv2Export#api_id}.

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#output_type DataAwsApigatewayv2Export#output_type}.

---

##### `specification`<sup>Required</sup> <a name="specification" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.specification"></a>

```python
specification: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#specification DataAwsApigatewayv2Export#specification}.

---

##### `export_version`<sup>Optional</sup> <a name="export_version" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.exportVersion"></a>

```python
export_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#export_version DataAwsApigatewayv2Export#export_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#id DataAwsApigatewayv2Export#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_extensions`<sup>Optional</sup> <a name="include_extensions" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.includeExtensions"></a>

```python
include_extensions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#include_extensions DataAwsApigatewayv2Export#include_extensions}.

---

##### `stage_name`<sup>Optional</sup> <a name="stage_name" id="@cdktf/provider-aws.dataAwsApigatewayv2Export.DataAwsApigatewayv2ExportConfig.property.stageName"></a>

```python
stage_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/apigatewayv2_export#stage_name DataAwsApigatewayv2Export#stage_name}.

---



