# `apigatewayv2IntegrationResponse` Submodule <a name="`apigatewayv2IntegrationResponse` Submodule" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2IntegrationResponse <a name="Apigatewayv2IntegrationResponse" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response aws_apigatewayv2_integration_response}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_integration_response

apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse(
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
  integration_id: str,
  integration_response_key: str,
  content_handling_strategy: str = None,
  id: str = None,
  response_templates: typing.Mapping[str] = None,
  template_selection_expression: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#api_id Apigatewayv2IntegrationResponse#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.integrationId">integration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#integration_id Apigatewayv2IntegrationResponse#integration_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.integrationResponseKey">integration_response_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#integration_response_key Apigatewayv2IntegrationResponse#integration_response_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.contentHandlingStrategy">content_handling_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#content_handling_strategy Apigatewayv2IntegrationResponse#content_handling_strategy}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#id Apigatewayv2IntegrationResponse#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.responseTemplates">response_templates</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#response_templates Apigatewayv2IntegrationResponse#response_templates}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.templateSelectionExpression">template_selection_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#template_selection_expression Apigatewayv2IntegrationResponse#template_selection_expression}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.apiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#api_id Apigatewayv2IntegrationResponse#api_id}.

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.integrationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#integration_id Apigatewayv2IntegrationResponse#integration_id}.

---

##### `integration_response_key`<sup>Required</sup> <a name="integration_response_key" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.integrationResponseKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#integration_response_key Apigatewayv2IntegrationResponse#integration_response_key}.

---

##### `content_handling_strategy`<sup>Optional</sup> <a name="content_handling_strategy" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.contentHandlingStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#content_handling_strategy Apigatewayv2IntegrationResponse#content_handling_strategy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#id Apigatewayv2IntegrationResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `response_templates`<sup>Optional</sup> <a name="response_templates" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.responseTemplates"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#response_templates Apigatewayv2IntegrationResponse#response_templates}.

---

##### `template_selection_expression`<sup>Optional</sup> <a name="template_selection_expression" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.templateSelectionExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#template_selection_expression Apigatewayv2IntegrationResponse#template_selection_expression}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetContentHandlingStrategy">reset_content_handling_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetResponseTemplates">reset_response_templates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetTemplateSelectionExpression">reset_template_selection_expression</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_content_handling_strategy` <a name="reset_content_handling_strategy" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetContentHandlingStrategy"></a>

```python
def reset_content_handling_strategy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_response_templates` <a name="reset_response_templates" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetResponseTemplates"></a>

```python
def reset_response_templates() -> None
```

##### `reset_template_selection_expression` <a name="reset_template_selection_expression" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetTemplateSelectionExpression"></a>

```python
def reset_template_selection_expression() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_integration_response

apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_integration_response

apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_integration_response

apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.contentHandlingStrategyInput">content_handling_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationIdInput">integration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationResponseKeyInput">integration_response_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.responseTemplatesInput">response_templates_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.templateSelectionExpressionInput">template_selection_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.contentHandlingStrategy">content_handling_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationId">integration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationResponseKey">integration_response_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.responseTemplates">response_templates</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.templateSelectionExpression">template_selection_expression</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `content_handling_strategy_input`<sup>Optional</sup> <a name="content_handling_strategy_input" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.contentHandlingStrategyInput"></a>

```python
content_handling_strategy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_id_input`<sup>Optional</sup> <a name="integration_id_input" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationIdInput"></a>

```python
integration_id_input: str
```

- *Type:* str

---

##### `integration_response_key_input`<sup>Optional</sup> <a name="integration_response_key_input" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationResponseKeyInput"></a>

```python
integration_response_key_input: str
```

- *Type:* str

---

##### `response_templates_input`<sup>Optional</sup> <a name="response_templates_input" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.responseTemplatesInput"></a>

```python
response_templates_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_selection_expression_input`<sup>Optional</sup> <a name="template_selection_expression_input" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.templateSelectionExpressionInput"></a>

```python
template_selection_expression_input: str
```

- *Type:* str

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `content_handling_strategy`<sup>Required</sup> <a name="content_handling_strategy" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.contentHandlingStrategy"></a>

```python
content_handling_strategy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

---

##### `integration_response_key`<sup>Required</sup> <a name="integration_response_key" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationResponseKey"></a>

```python
integration_response_key: str
```

- *Type:* str

---

##### `response_templates`<sup>Required</sup> <a name="response_templates" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.responseTemplates"></a>

```python
response_templates: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_selection_expression`<sup>Required</sup> <a name="template_selection_expression" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.templateSelectionExpression"></a>

```python
template_selection_expression: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2IntegrationResponseConfig <a name="Apigatewayv2IntegrationResponseConfig" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_integration_response

apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  integration_id: str,
  integration_response_key: str,
  content_handling_strategy: str = None,
  id: str = None,
  response_templates: typing.Mapping[str] = None,
  template_selection_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#api_id Apigatewayv2IntegrationResponse#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.integrationId">integration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#integration_id Apigatewayv2IntegrationResponse#integration_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.integrationResponseKey">integration_response_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#integration_response_key Apigatewayv2IntegrationResponse#integration_response_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.contentHandlingStrategy">content_handling_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#content_handling_strategy Apigatewayv2IntegrationResponse#content_handling_strategy}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#id Apigatewayv2IntegrationResponse#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.responseTemplates">response_templates</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#response_templates Apigatewayv2IntegrationResponse#response_templates}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.templateSelectionExpression">template_selection_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#template_selection_expression Apigatewayv2IntegrationResponse#template_selection_expression}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#api_id Apigatewayv2IntegrationResponse#api_id}.

---

##### `integration_id`<sup>Required</sup> <a name="integration_id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.integrationId"></a>

```python
integration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#integration_id Apigatewayv2IntegrationResponse#integration_id}.

---

##### `integration_response_key`<sup>Required</sup> <a name="integration_response_key" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.integrationResponseKey"></a>

```python
integration_response_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#integration_response_key Apigatewayv2IntegrationResponse#integration_response_key}.

---

##### `content_handling_strategy`<sup>Optional</sup> <a name="content_handling_strategy" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.contentHandlingStrategy"></a>

```python
content_handling_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#content_handling_strategy Apigatewayv2IntegrationResponse#content_handling_strategy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#id Apigatewayv2IntegrationResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `response_templates`<sup>Optional</sup> <a name="response_templates" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.responseTemplates"></a>

```python
response_templates: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#response_templates Apigatewayv2IntegrationResponse#response_templates}.

---

##### `template_selection_expression`<sup>Optional</sup> <a name="template_selection_expression" id="@cdktf/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.templateSelectionExpression"></a>

```python
template_selection_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration_response#template_selection_expression Apigatewayv2IntegrationResponse#template_selection_expression}.

---



