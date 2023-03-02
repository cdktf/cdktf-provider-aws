# `cloudformationType` Submodule <a name="`cloudformationType` Submodule" id="@cdktf/provider-aws.cloudformationType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationType <a name="CloudformationType" id="@cdktf/provider-aws.cloudformationType.CloudformationType"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type aws_cloudformation_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_type

cloudformationType.CloudformationType(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  schema_handler_package: str,
  type_name: str,
  execution_role_arn: str = None,
  id: str = None,
  logging_config: CloudformationTypeLoggingConfig = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.schemaHandlerPackage">schema_handler_package</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#schema_handler_package CloudformationType#schema_handler_package}. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#type_name CloudformationType#type_name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#execution_role_arn CloudformationType#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#id CloudformationType#id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfig">CloudformationTypeLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#type CloudformationType#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `schema_handler_package`<sup>Required</sup> <a name="schema_handler_package" id="@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.schemaHandlerPackage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#schema_handler_package CloudformationType#schema_handler_package}.

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.typeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#type_name CloudformationType#type_name}.

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.executionRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#execution_role_arn CloudformationType#execution_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#id CloudformationType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfig">CloudformationTypeLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#logging_config CloudformationType#logging_config}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.cloudformationType.CloudformationType.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#type CloudformationType#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.resetExecutionRoleArn">reset_execution_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudformationType.CloudformationType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudformationType.CloudformationType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudformationType.CloudformationType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationType.CloudformationType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudformationType.CloudformationType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudformationType.CloudformationType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudformationType.CloudformationType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudformationType.CloudformationType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudformationType.CloudformationType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-aws.cloudformationType.CloudformationType.putLoggingConfig"></a>

```python
def put_logging_config(
  log_group_name: str,
  log_role_arn: str
) -> None
```

###### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.cloudformationType.CloudformationType.putLoggingConfig.parameter.logGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#log_group_name CloudformationType#log_group_name}.

---

###### `log_role_arn`<sup>Required</sup> <a name="log_role_arn" id="@cdktf/provider-aws.cloudformationType.CloudformationType.putLoggingConfig.parameter.logRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#log_role_arn CloudformationType#log_role_arn}.

---

##### `reset_execution_role_arn` <a name="reset_execution_role_arn" id="@cdktf/provider-aws.cloudformationType.CloudformationType.resetExecutionRoleArn"></a>

```python
def reset_execution_role_arn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudformationType.CloudformationType.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-aws.cloudformationType.CloudformationType.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.cloudformationType.CloudformationType.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudformationType.CloudformationType.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_type

cloudformationType.CloudformationType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationType.CloudformationType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudformationType.CloudformationType.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_type

cloudformationType.CloudformationType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationType.CloudformationType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudformationType.CloudformationType.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_type

cloudformationType.CloudformationType.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationType.CloudformationType.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.defaultVersionId">default_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.deprecatedStatus">deprecated_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.documentationUrl">documentation_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.isDefaultVersion">is_default_version</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference">CloudformationTypeLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.provisioningType">provisioning_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.sourceUrl">source_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.typeArn">type_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.executionRoleArnInput">execution_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfig">CloudformationTypeLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.schemaHandlerPackageInput">schema_handler_package_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.schemaHandlerPackage">schema_handler_package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `default_version_id`<sup>Required</sup> <a name="default_version_id" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.defaultVersionId"></a>

```python
default_version_id: str
```

- *Type:* str

---

##### `deprecated_status`<sup>Required</sup> <a name="deprecated_status" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.deprecatedStatus"></a>

```python
deprecated_status: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `documentation_url`<sup>Required</sup> <a name="documentation_url" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.documentationUrl"></a>

```python
documentation_url: str
```

- *Type:* str

---

##### `is_default_version`<sup>Required</sup> <a name="is_default_version" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.isDefaultVersion"></a>

```python
is_default_version: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.loggingConfig"></a>

```python
logging_config: CloudformationTypeLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference">CloudformationTypeLoggingConfigOutputReference</a>

---

##### `provisioning_type`<sup>Required</sup> <a name="provisioning_type" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.provisioningType"></a>

```python
provisioning_type: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

---

##### `type_arn`<sup>Required</sup> <a name="type_arn" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.typeArn"></a>

```python
type_arn: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `execution_role_arn_input`<sup>Optional</sup> <a name="execution_role_arn_input" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.executionRoleArnInput"></a>

```python
execution_role_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.loggingConfigInput"></a>

```python
logging_config_input: CloudformationTypeLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfig">CloudformationTypeLoggingConfig</a>

---

##### `schema_handler_package_input`<sup>Optional</sup> <a name="schema_handler_package_input" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.schemaHandlerPackageInput"></a>

```python
schema_handler_package_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `execution_role_arn`<sup>Required</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schema_handler_package`<sup>Required</sup> <a name="schema_handler_package" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.schemaHandlerPackage"></a>

```python
schema_handler_package: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudformationType.CloudformationType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationTypeConfig <a name="CloudformationTypeConfig" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_type

cloudformationType.CloudformationTypeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  schema_handler_package: str,
  type_name: str,
  execution_role_arn: str = None,
  id: str = None,
  logging_config: CloudformationTypeLoggingConfig = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.schemaHandlerPackage">schema_handler_package</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#schema_handler_package CloudformationType#schema_handler_package}. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#type_name CloudformationType#type_name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.executionRoleArn">execution_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#execution_role_arn CloudformationType#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#id CloudformationType#id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfig">CloudformationTypeLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#type CloudformationType#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `schema_handler_package`<sup>Required</sup> <a name="schema_handler_package" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.schemaHandlerPackage"></a>

```python
schema_handler_package: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#schema_handler_package CloudformationType#schema_handler_package}.

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#type_name CloudformationType#type_name}.

---

##### `execution_role_arn`<sup>Optional</sup> <a name="execution_role_arn" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.executionRoleArn"></a>

```python
execution_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#execution_role_arn CloudformationType#execution_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#id CloudformationType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.loggingConfig"></a>

```python
logging_config: CloudformationTypeLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfig">CloudformationTypeLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#logging_config CloudformationType#logging_config}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#type CloudformationType#type}.

---

### CloudformationTypeLoggingConfig <a name="CloudformationTypeLoggingConfig" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_type

cloudformationType.CloudformationTypeLoggingConfig(
  log_group_name: str,
  log_role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfig.property.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#log_group_name CloudformationType#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfig.property.logRoleArn">log_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#log_role_arn CloudformationType#log_role_arn}. |

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfig.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#log_group_name CloudformationType#log_group_name}.

---

##### `log_role_arn`<sup>Required</sup> <a name="log_role_arn" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfig.property.logRoleArn"></a>

```python
log_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type#log_role_arn CloudformationType#log_role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationTypeLoggingConfigOutputReference <a name="CloudformationTypeLoggingConfigOutputReference" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_type

cloudformationType.CloudformationTypeLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.logRoleArnInput">log_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.logRoleArn">log_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfig">CloudformationTypeLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `log_role_arn_input`<sup>Optional</sup> <a name="log_role_arn_input" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.logRoleArnInput"></a>

```python
log_role_arn_input: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `log_role_arn`<sup>Required</sup> <a name="log_role_arn" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.logRoleArn"></a>

```python
log_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudformationTypeLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationType.CloudformationTypeLoggingConfig">CloudformationTypeLoggingConfig</a>

---



