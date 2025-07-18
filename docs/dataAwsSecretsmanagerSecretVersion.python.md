# `dataAwsSecretsmanagerSecretVersion` Submodule <a name="`dataAwsSecretsmanagerSecretVersion` Submodule" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecretsmanagerSecretVersion <a name="DataAwsSecretsmanagerSecretVersion" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version aws_secretsmanager_secret_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_secretsmanager_secret_version

dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  secret_id: str,
  id: str = None,
  region: str = None,
  version_id: str = None,
  version_stage: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#secret_id DataAwsSecretsmanagerSecretVersion#secret_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#id DataAwsSecretsmanagerSecretVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.versionId">version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#version_id DataAwsSecretsmanagerSecretVersion#version_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.versionStage">version_stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#version_stage DataAwsSecretsmanagerSecretVersion#version_stage}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.secretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#secret_id DataAwsSecretsmanagerSecretVersion#secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#id DataAwsSecretsmanagerSecretVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#region DataAwsSecretsmanagerSecretVersion#region}

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.versionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#version_id DataAwsSecretsmanagerSecretVersion#version_id}.

---

##### `version_stage`<sup>Optional</sup> <a name="version_stage" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.Initializer.parameter.versionStage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#version_stage DataAwsSecretsmanagerSecretVersion#version_stage}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.resetVersionId">reset_version_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.resetVersionStage">reset_version_stage</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_version_id` <a name="reset_version_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.resetVersionId"></a>

```python
def reset_version_id() -> None
```

##### `reset_version_stage` <a name="reset_version_stage" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.resetVersionStage"></a>

```python
def reset_version_stage() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsSecretsmanagerSecretVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_secretsmanager_secret_version

dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_secretsmanager_secret_version

dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_secretsmanager_secret_version

dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_secretsmanager_secret_version

dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsSecretsmanagerSecretVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsSecretsmanagerSecretVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsSecretsmanagerSecretVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSecretsmanagerSecretVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.secretBinary">secret_binary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.secretString">secret_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.versionStages">version_stages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.versionStageInput">version_stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.versionStage">version_stage</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `secret_binary`<sup>Required</sup> <a name="secret_binary" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.secretBinary"></a>

```python
secret_binary: str
```

- *Type:* str

---

##### `secret_string`<sup>Required</sup> <a name="secret_string" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.secretString"></a>

```python
secret_string: str
```

- *Type:* str

---

##### `version_stages`<sup>Required</sup> <a name="version_stages" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.versionStages"></a>

```python
version_stages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `version_stage_input`<sup>Optional</sup> <a name="version_stage_input" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.versionStageInput"></a>

```python
version_stage_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `version_stage`<sup>Required</sup> <a name="version_stage" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.versionStage"></a>

```python
version_stage: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecretsmanagerSecretVersionConfig <a name="DataAwsSecretsmanagerSecretVersionConfig" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_secretsmanager_secret_version

dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  secret_id: str,
  id: str = None,
  region: str = None,
  version_id: str = None,
  version_stage: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#secret_id DataAwsSecretsmanagerSecretVersion#secret_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#id DataAwsSecretsmanagerSecretVersion#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.versionId">version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#version_id DataAwsSecretsmanagerSecretVersion#version_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.versionStage">version_stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#version_stage DataAwsSecretsmanagerSecretVersion#version_stage}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#secret_id DataAwsSecretsmanagerSecretVersion#secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#id DataAwsSecretsmanagerSecretVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#region DataAwsSecretsmanagerSecretVersion#region}

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#version_id DataAwsSecretsmanagerSecretVersion#version_id}.

---

##### `version_stage`<sup>Optional</sup> <a name="version_stage" id="@cdktf/provider-aws.dataAwsSecretsmanagerSecretVersion.DataAwsSecretsmanagerSecretVersionConfig.property.versionStage"></a>

```python
version_stage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/secretsmanager_secret_version#version_stage DataAwsSecretsmanagerSecretVersion#version_stage}.

---



