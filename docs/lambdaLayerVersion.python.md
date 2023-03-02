# `lambdaLayerVersion` Submodule <a name="`lambdaLayerVersion` Submodule" id="@cdktf/provider-aws.lambdaLayerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaLayerVersion <a name="LambdaLayerVersion" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version aws_lambda_layer_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_layer_version

lambdaLayerVersion.LambdaLayerVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  layer_name: str,
  compatible_architectures: typing.List[str] = None,
  compatible_runtimes: typing.List[str] = None,
  description: str = None,
  filename: str = None,
  id: str = None,
  license_info: str = None,
  s3_bucket: str = None,
  s3_key: str = None,
  s3_object_version: str = None,
  skip_destroy: typing.Union[bool, IResolvable] = None,
  source_code_hash: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.layerName">layer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.compatibleArchitectures">compatible_architectures</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.compatibleRuntimes">compatible_runtimes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#description LambdaLayerVersion#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#filename LambdaLayerVersion#filename}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#id LambdaLayerVersion#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.licenseInfo">license_info</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#license_info LambdaLayerVersion#license_info}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.s3Key">s3_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.s3ObjectVersion">s3_object_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.skipDestroy">skip_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#skip_destroy LambdaLayerVersion#skip_destroy}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.sourceCodeHash">source_code_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#source_code_hash LambdaLayerVersion#source_code_hash}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `layer_name`<sup>Required</sup> <a name="layer_name" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.layerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}.

---

##### `compatible_architectures`<sup>Optional</sup> <a name="compatible_architectures" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.compatibleArchitectures"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}.

---

##### `compatible_runtimes`<sup>Optional</sup> <a name="compatible_runtimes" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.compatibleRuntimes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#description LambdaLayerVersion#description}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.filename"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#filename LambdaLayerVersion#filename}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#id LambdaLayerVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_info`<sup>Optional</sup> <a name="license_info" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.licenseInfo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#license_info LambdaLayerVersion#license_info}.

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.s3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}.

---

##### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.s3Key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}.

---

##### `s3_object_version`<sup>Optional</sup> <a name="s3_object_version" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.s3ObjectVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}.

---

##### `skip_destroy`<sup>Optional</sup> <a name="skip_destroy" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.skipDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#skip_destroy LambdaLayerVersion#skip_destroy}.

---

##### `source_code_hash`<sup>Optional</sup> <a name="source_code_hash" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.sourceCodeHash"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#source_code_hash LambdaLayerVersion#source_code_hash}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleArchitectures">reset_compatible_architectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleRuntimes">reset_compatible_runtimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetFilename">reset_filename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetLicenseInfo">reset_license_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3Bucket">reset_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3Key">reset_s3_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3ObjectVersion">reset_s3_object_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetSkipDestroy">reset_skip_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetSourceCodeHash">reset_source_code_hash</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_compatible_architectures` <a name="reset_compatible_architectures" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleArchitectures"></a>

```python
def reset_compatible_architectures() -> None
```

##### `reset_compatible_runtimes` <a name="reset_compatible_runtimes" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleRuntimes"></a>

```python
def reset_compatible_runtimes() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_filename` <a name="reset_filename" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetFilename"></a>

```python
def reset_filename() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_license_info` <a name="reset_license_info" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetLicenseInfo"></a>

```python
def reset_license_info() -> None
```

##### `reset_s3_bucket` <a name="reset_s3_bucket" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3Bucket"></a>

```python
def reset_s3_bucket() -> None
```

##### `reset_s3_key` <a name="reset_s3_key" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3Key"></a>

```python
def reset_s3_key() -> None
```

##### `reset_s3_object_version` <a name="reset_s3_object_version" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetS3ObjectVersion"></a>

```python
def reset_s3_object_version() -> None
```

##### `reset_skip_destroy` <a name="reset_skip_destroy" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetSkipDestroy"></a>

```python
def reset_skip_destroy() -> None
```

##### `reset_source_code_hash` <a name="reset_source_code_hash" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.resetSourceCodeHash"></a>

```python
def reset_source_code_hash() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lambda_layer_version

lambdaLayerVersion.LambdaLayerVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lambda_layer_version

lambdaLayerVersion.LambdaLayerVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lambda_layer_version

lambdaLayerVersion.LambdaLayerVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerArn">layer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.signingJobArn">signing_job_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.signingProfileVersionArn">signing_profile_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeSize">source_code_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitecturesInput">compatible_architectures_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimesInput">compatible_runtimes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerNameInput">layer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfoInput">license_info_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3KeyInput">s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3ObjectVersionInput">s3_object_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.skipDestroyInput">skip_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeHashInput">source_code_hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitectures">compatible_architectures</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimes">compatible_runtimes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerName">layer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfo">license_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3ObjectVersion">s3_object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.skipDestroy">skip_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeHash">source_code_hash</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `layer_arn`<sup>Required</sup> <a name="layer_arn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerArn"></a>

```python
layer_arn: str
```

- *Type:* str

---

##### `signing_job_arn`<sup>Required</sup> <a name="signing_job_arn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.signingJobArn"></a>

```python
signing_job_arn: str
```

- *Type:* str

---

##### `signing_profile_version_arn`<sup>Required</sup> <a name="signing_profile_version_arn" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.signingProfileVersionArn"></a>

```python
signing_profile_version_arn: str
```

- *Type:* str

---

##### `source_code_size`<sup>Required</sup> <a name="source_code_size" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeSize"></a>

```python
source_code_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `compatible_architectures_input`<sup>Optional</sup> <a name="compatible_architectures_input" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitecturesInput"></a>

```python
compatible_architectures_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compatible_runtimes_input`<sup>Optional</sup> <a name="compatible_runtimes_input" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimesInput"></a>

```python
compatible_runtimes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `layer_name_input`<sup>Optional</sup> <a name="layer_name_input" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerNameInput"></a>

```python
layer_name_input: str
```

- *Type:* str

---

##### `license_info_input`<sup>Optional</sup> <a name="license_info_input" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfoInput"></a>

```python
license_info_input: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_key_input`<sup>Optional</sup> <a name="s3_key_input" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3KeyInput"></a>

```python
s3_key_input: str
```

- *Type:* str

---

##### `s3_object_version_input`<sup>Optional</sup> <a name="s3_object_version_input" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3ObjectVersionInput"></a>

```python
s3_object_version_input: str
```

- *Type:* str

---

##### `skip_destroy_input`<sup>Optional</sup> <a name="skip_destroy_input" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.skipDestroyInput"></a>

```python
skip_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_code_hash_input`<sup>Optional</sup> <a name="source_code_hash_input" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeHashInput"></a>

```python
source_code_hash_input: str
```

- *Type:* str

---

##### `compatible_architectures`<sup>Required</sup> <a name="compatible_architectures" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitectures"></a>

```python
compatible_architectures: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compatible_runtimes`<sup>Required</sup> <a name="compatible_runtimes" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimes"></a>

```python
compatible_runtimes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `layer_name`<sup>Required</sup> <a name="layer_name" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.layerName"></a>

```python
layer_name: str
```

- *Type:* str

---

##### `license_info`<sup>Required</sup> <a name="license_info" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfo"></a>

```python
license_info: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `s3_object_version`<sup>Required</sup> <a name="s3_object_version" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.s3ObjectVersion"></a>

```python
s3_object_version: str
```

- *Type:* str

---

##### `skip_destroy`<sup>Required</sup> <a name="skip_destroy" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.skipDestroy"></a>

```python
skip_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_code_hash`<sup>Required</sup> <a name="source_code_hash" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeHash"></a>

```python
source_code_hash: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaLayerVersionConfig <a name="LambdaLayerVersionConfig" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_layer_version

lambdaLayerVersion.LambdaLayerVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  layer_name: str,
  compatible_architectures: typing.List[str] = None,
  compatible_runtimes: typing.List[str] = None,
  description: str = None,
  filename: str = None,
  id: str = None,
  license_info: str = None,
  s3_bucket: str = None,
  s3_key: str = None,
  s3_object_version: str = None,
  skip_destroy: typing.Union[bool, IResolvable] = None,
  source_code_hash: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.layerName">layer_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleArchitectures">compatible_architectures</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleRuntimes">compatible_runtimes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#description LambdaLayerVersion#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#filename LambdaLayerVersion#filename}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#id LambdaLayerVersion#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.licenseInfo">license_info</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#license_info LambdaLayerVersion#license_info}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3Key">s3_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3ObjectVersion">s3_object_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.skipDestroy">skip_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#skip_destroy LambdaLayerVersion#skip_destroy}. |
| <code><a href="#@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.sourceCodeHash">source_code_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#source_code_hash LambdaLayerVersion#source_code_hash}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `layer_name`<sup>Required</sup> <a name="layer_name" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.layerName"></a>

```python
layer_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}.

---

##### `compatible_architectures`<sup>Optional</sup> <a name="compatible_architectures" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleArchitectures"></a>

```python
compatible_architectures: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}.

---

##### `compatible_runtimes`<sup>Optional</sup> <a name="compatible_runtimes" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleRuntimes"></a>

```python
compatible_runtimes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#description LambdaLayerVersion#description}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.filename"></a>

```python
filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#filename LambdaLayerVersion#filename}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#id LambdaLayerVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_info`<sup>Optional</sup> <a name="license_info" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.licenseInfo"></a>

```python
license_info: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#license_info LambdaLayerVersion#license_info}.

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}.

---

##### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}.

---

##### `s3_object_version`<sup>Optional</sup> <a name="s3_object_version" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3ObjectVersion"></a>

```python
s3_object_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}.

---

##### `skip_destroy`<sup>Optional</sup> <a name="skip_destroy" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.skipDestroy"></a>

```python
skip_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#skip_destroy LambdaLayerVersion#skip_destroy}.

---

##### `source_code_hash`<sup>Optional</sup> <a name="source_code_hash" id="@cdktf/provider-aws.lambdaLayerVersion.LambdaLayerVersionConfig.property.sourceCodeHash"></a>

```python
source_code_hash: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version#source_code_hash LambdaLayerVersion#source_code_hash}.

---



