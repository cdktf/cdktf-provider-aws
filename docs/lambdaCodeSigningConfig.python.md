# `lambdaCodeSigningConfig` Submodule <a name="`lambdaCodeSigningConfig` Submodule" id="@cdktf/provider-aws.lambdaCodeSigningConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaCodeSigningConfig <a name="LambdaCodeSigningConfig" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config aws_lambda_code_signing_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_code_signing_config

lambdaCodeSigningConfig.LambdaCodeSigningConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allowed_publishers: LambdaCodeSigningConfigAllowedPublishers,
  description: str = None,
  id: str = None,
  policies: LambdaCodeSigningConfigPolicies = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.allowedPublishers">allowed_publishers</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a></code> | allowed_publishers block. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#description LambdaCodeSigningConfig#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#id LambdaCodeSigningConfig#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.policies">policies</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a></code> | policies block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_publishers`<sup>Required</sup> <a name="allowed_publishers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.allowedPublishers"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

allowed_publishers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#allowed_publishers LambdaCodeSigningConfig#allowed_publishers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#description LambdaCodeSigningConfig#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#id LambdaCodeSigningConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.Initializer.parameter.policies"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a>

policies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#policies LambdaCodeSigningConfig#policies}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putAllowedPublishers">put_allowed_publishers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putPolicies">put_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetPolicies">reset_policies</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_allowed_publishers` <a name="put_allowed_publishers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putAllowedPublishers"></a>

```python
def put_allowed_publishers(
  signing_profile_version_arns: typing.List[str]
) -> None
```

###### `signing_profile_version_arns`<sup>Required</sup> <a name="signing_profile_version_arns" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putAllowedPublishers.parameter.signingProfileVersionArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}.

---

##### `put_policies` <a name="put_policies" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putPolicies"></a>

```python
def put_policies(
  untrusted_artifact_on_deployment: str
) -> None
```

###### `untrusted_artifact_on_deployment`<sup>Required</sup> <a name="untrusted_artifact_on_deployment" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.putPolicies.parameter.untrustedArtifactOnDeployment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.resetPolicies"></a>

```python
def reset_policies() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lambda_code_signing_config

lambdaCodeSigningConfig.LambdaCodeSigningConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lambda_code_signing_config

lambdaCodeSigningConfig.LambdaCodeSigningConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lambda_code_signing_config

lambdaCodeSigningConfig.LambdaCodeSigningConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishers">allowed_publishers</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference">LambdaCodeSigningConfigAllowedPublishersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference">LambdaCodeSigningConfigPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishersInput">allowed_publishers_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.policiesInput">policies_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_publishers`<sup>Required</sup> <a name="allowed_publishers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishers"></a>

```python
allowed_publishers: LambdaCodeSigningConfigAllowedPublishersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference">LambdaCodeSigningConfigAllowedPublishersOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.policies"></a>

```python
policies: LambdaCodeSigningConfigPoliciesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference">LambdaCodeSigningConfigPoliciesOutputReference</a>

---

##### `allowed_publishers_input`<sup>Optional</sup> <a name="allowed_publishers_input" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.allowedPublishersInput"></a>

```python
allowed_publishers_input: LambdaCodeSigningConfigAllowedPublishers
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.policiesInput"></a>

```python
policies_input: LambdaCodeSigningConfigPolicies
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaCodeSigningConfigAllowedPublishers <a name="LambdaCodeSigningConfigAllowedPublishers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_code_signing_config

lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers(
  signing_profile_version_arns: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers.property.signingProfileVersionArns">signing_profile_version_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}. |

---

##### `signing_profile_version_arns`<sup>Required</sup> <a name="signing_profile_version_arns" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers.property.signingProfileVersionArns"></a>

```python
signing_profile_version_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}.

---

### LambdaCodeSigningConfigConfig <a name="LambdaCodeSigningConfigConfig" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_code_signing_config

lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  allowed_publishers: LambdaCodeSigningConfigAllowedPublishers,
  description: str = None,
  id: str = None,
  policies: LambdaCodeSigningConfigPolicies = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.allowedPublishers">allowed_publishers</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a></code> | allowed_publishers block. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#description LambdaCodeSigningConfig#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#id LambdaCodeSigningConfig#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a></code> | policies block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_publishers`<sup>Required</sup> <a name="allowed_publishers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.allowedPublishers"></a>

```python
allowed_publishers: LambdaCodeSigningConfigAllowedPublishers
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

allowed_publishers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#allowed_publishers LambdaCodeSigningConfig#allowed_publishers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#description LambdaCodeSigningConfig#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#id LambdaCodeSigningConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigConfig.property.policies"></a>

```python
policies: LambdaCodeSigningConfigPolicies
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a>

policies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#policies LambdaCodeSigningConfig#policies}

---

### LambdaCodeSigningConfigPolicies <a name="LambdaCodeSigningConfigPolicies" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_code_signing_config

lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies(
  untrusted_artifact_on_deployment: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies.property.untrustedArtifactOnDeployment">untrusted_artifact_on_deployment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}. |

---

##### `untrusted_artifact_on_deployment`<sup>Required</sup> <a name="untrusted_artifact_on_deployment" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies.property.untrustedArtifactOnDeployment"></a>

```python
untrusted_artifact_on_deployment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaCodeSigningConfigAllowedPublishersOutputReference <a name="LambdaCodeSigningConfigAllowedPublishersOutputReference" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_code_signing_config

lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArnsInput">signing_profile_version_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns">signing_profile_version_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `signing_profile_version_arns_input`<sup>Optional</sup> <a name="signing_profile_version_arns_input" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArnsInput"></a>

```python
signing_profile_version_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `signing_profile_version_arns`<sup>Required</sup> <a name="signing_profile_version_arns" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.signingProfileVersionArns"></a>

```python
signing_profile_version_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishersOutputReference.property.internalValue"></a>

```python
internal_value: LambdaCodeSigningConfigAllowedPublishers
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigAllowedPublishers">LambdaCodeSigningConfigAllowedPublishers</a>

---


### LambdaCodeSigningConfigPoliciesOutputReference <a name="LambdaCodeSigningConfigPoliciesOutputReference" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_code_signing_config

lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeploymentInput">untrusted_artifact_on_deployment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeployment">untrusted_artifact_on_deployment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `untrusted_artifact_on_deployment_input`<sup>Optional</sup> <a name="untrusted_artifact_on_deployment_input" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeploymentInput"></a>

```python
untrusted_artifact_on_deployment_input: str
```

- *Type:* str

---

##### `untrusted_artifact_on_deployment`<sup>Required</sup> <a name="untrusted_artifact_on_deployment" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.untrustedArtifactOnDeployment"></a>

```python
untrusted_artifact_on_deployment: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: LambdaCodeSigningConfigPolicies
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaCodeSigningConfig.LambdaCodeSigningConfigPolicies">LambdaCodeSigningConfigPolicies</a>

---



