# `lambdaFunctionUrl` Submodule <a name="`lambdaFunctionUrl` Submodule" id="@cdktf/provider-aws.lambdaFunctionUrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaFunctionUrl <a name="LambdaFunctionUrl" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url aws_lambda_function_url}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_url

lambdaFunctionUrl.LambdaFunctionUrl(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization_type: str,
  function_name: str,
  cors: LambdaFunctionUrlCors = None,
  id: str = None,
  qualifier: str = None,
  timeouts: LambdaFunctionUrlTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.authorizationType">authorization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#authorization_type LambdaFunctionUrl#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#function_name LambdaFunctionUrl#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.cors">cors</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#id LambdaFunctionUrl#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.qualifier">qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#qualifier LambdaFunctionUrl#qualifier}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.authorizationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#authorization_type LambdaFunctionUrl#authorization_type}.

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#function_name LambdaFunctionUrl#function_name}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.cors"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a>

cors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#cors LambdaFunctionUrl#cors}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#id LambdaFunctionUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.qualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#qualifier LambdaFunctionUrl#qualifier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#timeouts LambdaFunctionUrl#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putCors">put_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetCors">reset_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetQualifier">reset_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cors` <a name="put_cors" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putCors"></a>

```python
def put_cors(
  allow_credentials: typing.Union[bool, IResolvable] = None,
  allow_headers: typing.List[str] = None,
  allow_methods: typing.List[str] = None,
  allow_origins: typing.List[str] = None,
  expose_headers: typing.List[str] = None,
  max_age: typing.Union[int, float] = None
) -> None
```

###### `allow_credentials`<sup>Optional</sup> <a name="allow_credentials" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putCors.parameter.allowCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_credentials LambdaFunctionUrl#allow_credentials}.

---

###### `allow_headers`<sup>Optional</sup> <a name="allow_headers" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putCors.parameter.allowHeaders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_headers LambdaFunctionUrl#allow_headers}.

---

###### `allow_methods`<sup>Optional</sup> <a name="allow_methods" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putCors.parameter.allowMethods"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_methods LambdaFunctionUrl#allow_methods}.

---

###### `allow_origins`<sup>Optional</sup> <a name="allow_origins" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putCors.parameter.allowOrigins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_origins LambdaFunctionUrl#allow_origins}.

---

###### `expose_headers`<sup>Optional</sup> <a name="expose_headers" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putCors.parameter.exposeHeaders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#expose_headers LambdaFunctionUrl#expose_headers}.

---

###### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putCors.parameter.maxAge"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#max_age LambdaFunctionUrl#max_age}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#create LambdaFunctionUrl#create}.

---

##### `reset_cors` <a name="reset_cors" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetCors"></a>

```python
def reset_cors() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_qualifier` <a name="reset_qualifier" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetQualifier"></a>

```python
def reset_qualifier() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_url

lambdaFunctionUrl.LambdaFunctionUrl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_url

lambdaFunctionUrl.LambdaFunctionUrl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_url

lambdaFunctionUrl.LambdaFunctionUrl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference">LambdaFunctionUrlCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionUrl">function_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference">LambdaFunctionUrlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.urlId">url_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.authorizationTypeInput">authorization_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.corsInput">cors_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.qualifierInput">qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.qualifier">qualifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.cors"></a>

```python
cors: LambdaFunctionUrlCorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference">LambdaFunctionUrlCorsOutputReference</a>

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `function_url`<sup>Required</sup> <a name="function_url" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionUrl"></a>

```python
function_url: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.timeouts"></a>

```python
timeouts: LambdaFunctionUrlTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference">LambdaFunctionUrlTimeoutsOutputReference</a>

---

##### `url_id`<sup>Required</sup> <a name="url_id" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.urlId"></a>

```python
url_id: str
```

- *Type:* str

---

##### `authorization_type_input`<sup>Optional</sup> <a name="authorization_type_input" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.authorizationTypeInput"></a>

```python
authorization_type_input: str
```

- *Type:* str

---

##### `cors_input`<sup>Optional</sup> <a name="cors_input" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.corsInput"></a>

```python
cors_input: LambdaFunctionUrlCors
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a>

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `qualifier_input`<sup>Optional</sup> <a name="qualifier_input" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.qualifierInput"></a>

```python
qualifier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[LambdaFunctionUrlTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a>, cdktf.IResolvable]

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaFunctionUrlConfig <a name="LambdaFunctionUrlConfig" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_url

lambdaFunctionUrl.LambdaFunctionUrlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization_type: str,
  function_name: str,
  cors: LambdaFunctionUrlCors = None,
  id: str = None,
  qualifier: str = None,
  timeouts: LambdaFunctionUrlTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.authorizationType">authorization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#authorization_type LambdaFunctionUrl#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#function_name LambdaFunctionUrl#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#id LambdaFunctionUrl#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.qualifier">qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#qualifier LambdaFunctionUrl#qualifier}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#authorization_type LambdaFunctionUrl#authorization_type}.

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#function_name LambdaFunctionUrl#function_name}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.cors"></a>

```python
cors: LambdaFunctionUrlCors
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a>

cors block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#cors LambdaFunctionUrl#cors}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#id LambdaFunctionUrl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#qualifier LambdaFunctionUrl#qualifier}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlConfig.property.timeouts"></a>

```python
timeouts: LambdaFunctionUrlTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#timeouts LambdaFunctionUrl#timeouts}

---

### LambdaFunctionUrlCors <a name="LambdaFunctionUrlCors" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_url

lambdaFunctionUrl.LambdaFunctionUrlCors(
  allow_credentials: typing.Union[bool, IResolvable] = None,
  allow_headers: typing.List[str] = None,
  allow_methods: typing.List[str] = None,
  allow_origins: typing.List[str] = None,
  expose_headers: typing.List[str] = None,
  max_age: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowCredentials">allow_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_credentials LambdaFunctionUrl#allow_credentials}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowHeaders">allow_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_headers LambdaFunctionUrl#allow_headers}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowMethods">allow_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_methods LambdaFunctionUrl#allow_methods}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowOrigins">allow_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_origins LambdaFunctionUrl#allow_origins}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#expose_headers LambdaFunctionUrl#expose_headers}. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#max_age LambdaFunctionUrl#max_age}. |

---

##### `allow_credentials`<sup>Optional</sup> <a name="allow_credentials" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowCredentials"></a>

```python
allow_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_credentials LambdaFunctionUrl#allow_credentials}.

---

##### `allow_headers`<sup>Optional</sup> <a name="allow_headers" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowHeaders"></a>

```python
allow_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_headers LambdaFunctionUrl#allow_headers}.

---

##### `allow_methods`<sup>Optional</sup> <a name="allow_methods" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowMethods"></a>

```python
allow_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_methods LambdaFunctionUrl#allow_methods}.

---

##### `allow_origins`<sup>Optional</sup> <a name="allow_origins" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.allowOrigins"></a>

```python
allow_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#allow_origins LambdaFunctionUrl#allow_origins}.

---

##### `expose_headers`<sup>Optional</sup> <a name="expose_headers" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#expose_headers LambdaFunctionUrl#expose_headers}.

---

##### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#max_age LambdaFunctionUrl#max_age}.

---

### LambdaFunctionUrlTimeouts <a name="LambdaFunctionUrlTimeouts" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_url

lambdaFunctionUrl.LambdaFunctionUrlTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#create LambdaFunctionUrl#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_url#create LambdaFunctionUrl#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaFunctionUrlCorsOutputReference <a name="LambdaFunctionUrlCorsOutputReference" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_url

lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowCredentials">reset_allow_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowHeaders">reset_allow_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowMethods">reset_allow_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowOrigins">reset_allow_origins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetExposeHeaders">reset_expose_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetMaxAge">reset_max_age</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_credentials` <a name="reset_allow_credentials" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowCredentials"></a>

```python
def reset_allow_credentials() -> None
```

##### `reset_allow_headers` <a name="reset_allow_headers" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowHeaders"></a>

```python
def reset_allow_headers() -> None
```

##### `reset_allow_methods` <a name="reset_allow_methods" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowMethods"></a>

```python
def reset_allow_methods() -> None
```

##### `reset_allow_origins` <a name="reset_allow_origins" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetAllowOrigins"></a>

```python
def reset_allow_origins() -> None
```

##### `reset_expose_headers` <a name="reset_expose_headers" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetExposeHeaders"></a>

```python
def reset_expose_headers() -> None
```

##### `reset_max_age` <a name="reset_max_age" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.resetMaxAge"></a>

```python
def reset_max_age() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowCredentialsInput">allow_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowHeadersInput">allow_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowMethodsInput">allow_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowOriginsInput">allow_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.exposeHeadersInput">expose_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.maxAgeInput">max_age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowCredentials">allow_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowHeaders">allow_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowMethods">allow_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowOrigins">allow_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_credentials_input`<sup>Optional</sup> <a name="allow_credentials_input" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowCredentialsInput"></a>

```python
allow_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_headers_input`<sup>Optional</sup> <a name="allow_headers_input" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowHeadersInput"></a>

```python
allow_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_methods_input`<sup>Optional</sup> <a name="allow_methods_input" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowMethodsInput"></a>

```python
allow_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_origins_input`<sup>Optional</sup> <a name="allow_origins_input" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowOriginsInput"></a>

```python
allow_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers_input`<sup>Optional</sup> <a name="expose_headers_input" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.exposeHeadersInput"></a>

```python
expose_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_input`<sup>Optional</sup> <a name="max_age_input" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.maxAgeInput"></a>

```python
max_age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allow_credentials`<sup>Required</sup> <a name="allow_credentials" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowCredentials"></a>

```python
allow_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_headers`<sup>Required</sup> <a name="allow_headers" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowHeaders"></a>

```python
allow_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_methods`<sup>Required</sup> <a name="allow_methods" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowMethods"></a>

```python
allow_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_origins`<sup>Required</sup> <a name="allow_origins" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.allowOrigins"></a>

```python
allow_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers`<sup>Required</sup> <a name="expose_headers" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCorsOutputReference.property.internalValue"></a>

```python
internal_value: LambdaFunctionUrlCors
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlCors">LambdaFunctionUrlCors</a>

---


### LambdaFunctionUrlTimeoutsOutputReference <a name="LambdaFunctionUrlTimeoutsOutputReference" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_function_url

lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LambdaFunctionUrlTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lambdaFunctionUrl.LambdaFunctionUrlTimeouts">LambdaFunctionUrlTimeouts</a>, cdktf.IResolvable]

---



