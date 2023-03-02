# `appconfigHostedConfigurationVersion` Submodule <a name="`appconfigHostedConfigurationVersion` Submodule" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigHostedConfigurationVersion <a name="AppconfigHostedConfigurationVersion" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version aws_appconfig_hosted_configuration_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_hosted_configuration_version

appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion(
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
  content: str,
  content_type: str,
  description: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#application_id AppconfigHostedConfigurationVersion#application_id}. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.configurationProfileId">configuration_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#configuration_profile_id AppconfigHostedConfigurationVersion#configuration_profile_id}. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#content AppconfigHostedConfigurationVersion#content}. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#content_type AppconfigHostedConfigurationVersion#content_type}. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#description AppconfigHostedConfigurationVersion#description}. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#id AppconfigHostedConfigurationVersion#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#application_id AppconfigHostedConfigurationVersion#application_id}.

---

##### `configuration_profile_id`<sup>Required</sup> <a name="configuration_profile_id" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.configurationProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#configuration_profile_id AppconfigHostedConfigurationVersion#configuration_profile_id}.

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#content AppconfigHostedConfigurationVersion#content}.

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#content_type AppconfigHostedConfigurationVersion#content_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#description AppconfigHostedConfigurationVersion#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#id AppconfigHostedConfigurationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_hosted_configuration_version

appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_hosted_configuration_version

appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_hosted_configuration_version

appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionNumber">version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileIdInput">configuration_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileId">configuration_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.versionNumber"></a>

```python
version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `configuration_profile_id_input`<sup>Optional</sup> <a name="configuration_profile_id_input" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileIdInput"></a>

```python
configuration_profile_id_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `configuration_profile_id`<sup>Required</sup> <a name="configuration_profile_id" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.configurationProfileId"></a>

```python
configuration_profile_id: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigHostedConfigurationVersionConfig <a name="AppconfigHostedConfigurationVersionConfig" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_hosted_configuration_version

appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  configuration_profile_id: str,
  content: str,
  content_type: str,
  description: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#application_id AppconfigHostedConfigurationVersion#application_id}. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.configurationProfileId">configuration_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#configuration_profile_id AppconfigHostedConfigurationVersion#configuration_profile_id}. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#content AppconfigHostedConfigurationVersion#content}. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#content_type AppconfigHostedConfigurationVersion#content_type}. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#description AppconfigHostedConfigurationVersion#description}. |
| <code><a href="#@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#id AppconfigHostedConfigurationVersion#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#application_id AppconfigHostedConfigurationVersion#application_id}.

---

##### `configuration_profile_id`<sup>Required</sup> <a name="configuration_profile_id" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.configurationProfileId"></a>

```python
configuration_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#configuration_profile_id AppconfigHostedConfigurationVersion#configuration_profile_id}.

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#content AppconfigHostedConfigurationVersion#content}.

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#content_type AppconfigHostedConfigurationVersion#content_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#description AppconfigHostedConfigurationVersion#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appconfigHostedConfigurationVersion.AppconfigHostedConfigurationVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version#id AppconfigHostedConfigurationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



