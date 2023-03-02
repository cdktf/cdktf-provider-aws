# `dataAwsAppconfigConfigurationProfile` Submodule <a name="`dataAwsAppconfigConfigurationProfile` Submodule" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAppconfigConfigurationProfile <a name="DataAwsAppconfigConfigurationProfile" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile aws_appconfig_configuration_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appconfig_configuration_profile

dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  configuration_profile_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#application_id DataAwsAppconfigConfigurationProfile#application_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.configurationProfileId">configuration_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#configuration_profile_id DataAwsAppconfigConfigurationProfile#configuration_profile_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#id DataAwsAppconfigConfigurationProfile#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#tags DataAwsAppconfigConfigurationProfile#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#application_id DataAwsAppconfigConfigurationProfile#application_id}.

---

##### `configuration_profile_id`<sup>Required</sup> <a name="configuration_profile_id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.configurationProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#configuration_profile_id DataAwsAppconfigConfigurationProfile#configuration_profile_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#id DataAwsAppconfigConfigurationProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#tags DataAwsAppconfigConfigurationProfile#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appconfig_configuration_profile

dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appconfig_configuration_profile

dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appconfig_configuration_profile

dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.retrievalRoleArn">retrieval_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.validator">validator</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList">DataAwsAppconfigConfigurationProfileValidatorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.configurationProfileIdInput">configuration_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.configurationProfileId">configuration_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retrieval_role_arn`<sup>Required</sup> <a name="retrieval_role_arn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.retrievalRoleArn"></a>

```python
retrieval_role_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validator`<sup>Required</sup> <a name="validator" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.validator"></a>

```python
validator: DataAwsAppconfigConfigurationProfileValidatorList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList">DataAwsAppconfigConfigurationProfileValidatorList</a>

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `configuration_profile_id_input`<sup>Optional</sup> <a name="configuration_profile_id_input" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.configurationProfileIdInput"></a>

```python
configuration_profile_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `configuration_profile_id`<sup>Required</sup> <a name="configuration_profile_id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.configurationProfileId"></a>

```python
configuration_profile_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAppconfigConfigurationProfileConfig <a name="DataAwsAppconfigConfigurationProfileConfig" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appconfig_configuration_profile

dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  configuration_profile_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#application_id DataAwsAppconfigConfigurationProfile#application_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.configurationProfileId">configuration_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#configuration_profile_id DataAwsAppconfigConfigurationProfile#configuration_profile_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#id DataAwsAppconfigConfigurationProfile#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#tags DataAwsAppconfigConfigurationProfile#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#application_id DataAwsAppconfigConfigurationProfile#application_id}.

---

##### `configuration_profile_id`<sup>Required</sup> <a name="configuration_profile_id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.configurationProfileId"></a>

```python
configuration_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#configuration_profile_id DataAwsAppconfigConfigurationProfile#configuration_profile_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#id DataAwsAppconfigConfigurationProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#tags DataAwsAppconfigConfigurationProfile#tags}.

---

### DataAwsAppconfigConfigurationProfileValidator <a name="DataAwsAppconfigConfigurationProfileValidator" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidator.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appconfig_configuration_profile

dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidator()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAppconfigConfigurationProfileValidatorList <a name="DataAwsAppconfigConfigurationProfileValidatorList" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appconfig_configuration_profile

dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppconfigConfigurationProfileValidatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppconfigConfigurationProfileValidatorOutputReference <a name="DataAwsAppconfigConfigurationProfileValidatorOutputReference" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appconfig_configuration_profile

dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidator">DataAwsAppconfigConfigurationProfileValidator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppconfigConfigurationProfileValidator
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidator">DataAwsAppconfigConfigurationProfileValidator</a>

---



