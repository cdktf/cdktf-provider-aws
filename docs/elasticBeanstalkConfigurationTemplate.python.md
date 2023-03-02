# `elasticBeanstalkConfigurationTemplate` Submodule <a name="`elasticBeanstalkConfigurationTemplate` Submodule" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticBeanstalkConfigurationTemplate <a name="ElasticBeanstalkConfigurationTemplate" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template aws_elastic_beanstalk_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_configuration_template

elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application: str,
  name: str,
  description: str = None,
  environment_id: str = None,
  id: str = None,
  setting: typing.Union[IResolvable, typing.List[ElasticBeanstalkConfigurationTemplateSetting]] = None,
  solution_stack_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.application">application</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#application ElasticBeanstalkConfigurationTemplate#application}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#description ElasticBeanstalkConfigurationTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.environmentId">environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#environment_id ElasticBeanstalkConfigurationTemplate#environment_id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#id ElasticBeanstalkConfigurationTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.setting">setting</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>]]</code> | setting block. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.solutionStackName">solution_stack_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#solution_stack_name ElasticBeanstalkConfigurationTemplate#solution_stack_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.application"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#application ElasticBeanstalkConfigurationTemplate#application}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#description ElasticBeanstalkConfigurationTemplate#description}.

---

##### `environment_id`<sup>Optional</sup> <a name="environment_id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.environmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#environment_id ElasticBeanstalkConfigurationTemplate#environment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#id ElasticBeanstalkConfigurationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `setting`<sup>Optional</sup> <a name="setting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.setting"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>]]

setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#setting ElasticBeanstalkConfigurationTemplate#setting}

---

##### `solution_stack_name`<sup>Optional</sup> <a name="solution_stack_name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.solutionStackName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#solution_stack_name ElasticBeanstalkConfigurationTemplate#solution_stack_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.putSetting">put_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetEnvironmentId">reset_environment_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetSetting">reset_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetSolutionStackName">reset_solution_stack_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_setting` <a name="put_setting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.putSetting"></a>

```python
def put_setting(
  value: typing.Union[IResolvable, typing.List[ElasticBeanstalkConfigurationTemplateSetting]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.putSetting.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_environment_id` <a name="reset_environment_id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetEnvironmentId"></a>

```python
def reset_environment_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_setting` <a name="reset_setting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetSetting"></a>

```python
def reset_setting() -> None
```

##### `reset_solution_stack_name` <a name="reset_solution_stack_name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetSolutionStackName"></a>

```python
def reset_solution_stack_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_configuration_template

elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_configuration_template

elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_configuration_template

elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.setting">setting</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList">ElasticBeanstalkConfigurationTemplateSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.applicationInput">application_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.environmentIdInput">environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.settingInput">setting_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.solutionStackNameInput">solution_stack_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.application">application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.solutionStackName">solution_stack_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.setting"></a>

```python
setting: ElasticBeanstalkConfigurationTemplateSettingList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList">ElasticBeanstalkConfigurationTemplateSettingList</a>

---

##### `application_input`<sup>Optional</sup> <a name="application_input" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.applicationInput"></a>

```python
application_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environment_id_input`<sup>Optional</sup> <a name="environment_id_input" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.environmentIdInput"></a>

```python
environment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `setting_input`<sup>Optional</sup> <a name="setting_input" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.settingInput"></a>

```python
setting_input: typing.Union[IResolvable, typing.List[ElasticBeanstalkConfigurationTemplateSetting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>]]

---

##### `solution_stack_name_input`<sup>Optional</sup> <a name="solution_stack_name_input" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.solutionStackNameInput"></a>

```python
solution_stack_name_input: str
```

- *Type:* str

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.application"></a>

```python
application: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `solution_stack_name`<sup>Required</sup> <a name="solution_stack_name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.solutionStackName"></a>

```python
solution_stack_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticBeanstalkConfigurationTemplateConfig <a name="ElasticBeanstalkConfigurationTemplateConfig" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_configuration_template

elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application: str,
  name: str,
  description: str = None,
  environment_id: str = None,
  id: str = None,
  setting: typing.Union[IResolvable, typing.List[ElasticBeanstalkConfigurationTemplateSetting]] = None,
  solution_stack_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.application">application</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#application ElasticBeanstalkConfigurationTemplate#application}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#description ElasticBeanstalkConfigurationTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.environmentId">environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#environment_id ElasticBeanstalkConfigurationTemplate#environment_id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#id ElasticBeanstalkConfigurationTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.setting">setting</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>]]</code> | setting block. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.solutionStackName">solution_stack_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#solution_stack_name ElasticBeanstalkConfigurationTemplate#solution_stack_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.application"></a>

```python
application: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#application ElasticBeanstalkConfigurationTemplate#application}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#description ElasticBeanstalkConfigurationTemplate#description}.

---

##### `environment_id`<sup>Optional</sup> <a name="environment_id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#environment_id ElasticBeanstalkConfigurationTemplate#environment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#id ElasticBeanstalkConfigurationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `setting`<sup>Optional</sup> <a name="setting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.setting"></a>

```python
setting: typing.Union[IResolvable, typing.List[ElasticBeanstalkConfigurationTemplateSetting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>]]

setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#setting ElasticBeanstalkConfigurationTemplate#setting}

---

##### `solution_stack_name`<sup>Optional</sup> <a name="solution_stack_name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.solutionStackName"></a>

```python
solution_stack_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#solution_stack_name ElasticBeanstalkConfigurationTemplate#solution_stack_name}.

---

### ElasticBeanstalkConfigurationTemplateSetting <a name="ElasticBeanstalkConfigurationTemplateSetting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_configuration_template

elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting(
  name: str,
  namespace: str,
  value: str,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#namespace ElasticBeanstalkConfigurationTemplate#namespace}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#value ElasticBeanstalkConfigurationTemplate#value}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.resource">resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#resource ElasticBeanstalkConfigurationTemplate#resource}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#namespace ElasticBeanstalkConfigurationTemplate#namespace}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#value ElasticBeanstalkConfigurationTemplate#value}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.resource"></a>

```python
resource: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#resource ElasticBeanstalkConfigurationTemplate#resource}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticBeanstalkConfigurationTemplateSettingList <a name="ElasticBeanstalkConfigurationTemplateSettingList" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_configuration_template

elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticBeanstalkConfigurationTemplateSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElasticBeanstalkConfigurationTemplateSetting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>]]

---


### ElasticBeanstalkConfigurationTemplateSettingOutputReference <a name="ElasticBeanstalkConfigurationTemplateSettingOutputReference" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_configuration_template

elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ElasticBeanstalkConfigurationTemplateSetting, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting">ElasticBeanstalkConfigurationTemplateSetting</a>, cdktf.IResolvable]

---



