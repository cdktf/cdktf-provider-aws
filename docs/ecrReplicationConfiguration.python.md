# `ecrReplicationConfiguration` Submodule <a name="`ecrReplicationConfiguration` Submodule" id="@cdktf/provider-aws.ecrReplicationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrReplicationConfiguration <a name="EcrReplicationConfiguration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration aws_ecr_replication_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_replication_configuration

ecrReplicationConfiguration.EcrReplicationConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  replication_configuration: EcrReplicationConfigurationReplicationConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#id EcrReplicationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.replicationConfiguration">replication_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | replication_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#id EcrReplicationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replication_configuration`<sup>Optional</sup> <a name="replication_configuration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.replicationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

replication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#replication_configuration EcrReplicationConfiguration#replication_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.putReplicationConfiguration">put_replication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetReplicationConfiguration">reset_replication_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_replication_configuration` <a name="put_replication_configuration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.putReplicationConfiguration"></a>

```python
def put_replication_configuration(
  rule: typing.Union[IResolvable, typing.List[EcrReplicationConfigurationReplicationConfigurationRule]]
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.putReplicationConfiguration.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#rule EcrReplicationConfiguration#rule}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_replication_configuration` <a name="reset_replication_configuration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.resetReplicationConfiguration"></a>

```python
def reset_replication_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ecr_replication_configuration

ecrReplicationConfiguration.EcrReplicationConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ecr_replication_configuration

ecrReplicationConfiguration.EcrReplicationConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ecr_replication_configuration

ecrReplicationConfiguration.EcrReplicationConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.registryId">registry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfiguration">replication_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference">EcrReplicationConfigurationReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfigurationInput">replication_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `registry_id`<sup>Required</sup> <a name="registry_id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.registryId"></a>

```python
registry_id: str
```

- *Type:* str

---

##### `replication_configuration`<sup>Required</sup> <a name="replication_configuration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfiguration"></a>

```python
replication_configuration: EcrReplicationConfigurationReplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference">EcrReplicationConfigurationReplicationConfigurationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `replication_configuration_input`<sup>Optional</sup> <a name="replication_configuration_input" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfigurationInput"></a>

```python
replication_configuration_input: EcrReplicationConfigurationReplicationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcrReplicationConfigurationConfig <a name="EcrReplicationConfigurationConfig" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_replication_configuration

ecrReplicationConfiguration.EcrReplicationConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  replication_configuration: EcrReplicationConfigurationReplicationConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#id EcrReplicationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.replicationConfiguration">replication_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | replication_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#id EcrReplicationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replication_configuration`<sup>Optional</sup> <a name="replication_configuration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.replicationConfiguration"></a>

```python
replication_configuration: EcrReplicationConfigurationReplicationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

replication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#replication_configuration EcrReplicationConfiguration#replication_configuration}

---

### EcrReplicationConfigurationReplicationConfiguration <a name="EcrReplicationConfigurationReplicationConfiguration" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_replication_configuration

ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration(
  rule: typing.Union[IResolvable, typing.List[EcrReplicationConfigurationReplicationConfigurationRule]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>]]</code> | rule block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[EcrReplicationConfigurationReplicationConfigurationRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#rule EcrReplicationConfiguration#rule}

---

### EcrReplicationConfigurationReplicationConfigurationRule <a name="EcrReplicationConfigurationReplicationConfigurationRule" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_replication_configuration

ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule(
  destination: typing.Union[IResolvable, typing.List[EcrReplicationConfigurationReplicationConfigurationRuleDestination]],
  repository_filter: typing.Union[IResolvable, typing.List[EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.property.destination">destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>]]</code> | destination block. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.property.repositoryFilter">repository_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>]]</code> | repository_filter block. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.property.destination"></a>

```python
destination: typing.Union[IResolvable, typing.List[EcrReplicationConfigurationReplicationConfigurationRuleDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>]]

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#destination EcrReplicationConfiguration#destination}

---

##### `repository_filter`<sup>Optional</sup> <a name="repository_filter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.property.repositoryFilter"></a>

```python
repository_filter: typing.Union[IResolvable, typing.List[EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>]]

repository_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#repository_filter EcrReplicationConfiguration#repository_filter}

---

### EcrReplicationConfigurationReplicationConfigurationRuleDestination <a name="EcrReplicationConfigurationReplicationConfigurationRuleDestination" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_replication_configuration

ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination(
  region: str,
  registry_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#region EcrReplicationConfiguration#region}. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.property.registryId">registry_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#registry_id EcrReplicationConfiguration#registry_id}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#region EcrReplicationConfiguration#region}.

---

##### `registry_id`<sup>Required</sup> <a name="registry_id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.property.registryId"></a>

```python
registry_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#registry_id EcrReplicationConfiguration#registry_id}.

---

### EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter <a name="EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_replication_configuration

ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter(
  filter: str,
  filter_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#filter EcrReplicationConfiguration#filter}. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.property.filterType">filter_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#filter_type EcrReplicationConfiguration#filter_type}. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#filter EcrReplicationConfiguration#filter}.

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_replication_configuration#filter_type EcrReplicationConfiguration#filter_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcrReplicationConfigurationReplicationConfigurationOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationOutputReference" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_replication_configuration

ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.putRule">put_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[EcrReplicationConfigurationReplicationConfigurationRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList">EcrReplicationConfigurationReplicationConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.rule"></a>

```python
rule: EcrReplicationConfigurationReplicationConfigurationRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList">EcrReplicationConfigurationReplicationConfigurationRuleList</a>

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[EcrReplicationConfigurationReplicationConfigurationRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: EcrReplicationConfigurationReplicationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

---


### EcrReplicationConfigurationReplicationConfigurationRuleDestinationList <a name="EcrReplicationConfigurationReplicationConfigurationRuleDestinationList" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_replication_configuration

ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcrReplicationConfigurationReplicationConfigurationRuleDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>]]

---


### EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_replication_configuration

ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.registryIdInput">registry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.registryId">registry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `registry_id_input`<sup>Optional</sup> <a name="registry_id_input" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.registryIdInput"></a>

```python
registry_id_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `registry_id`<sup>Required</sup> <a name="registry_id" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.registryId"></a>

```python
registry_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EcrReplicationConfigurationReplicationConfigurationRuleDestination, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>, cdktf.IResolvable]

---


### EcrReplicationConfigurationReplicationConfigurationRuleList <a name="EcrReplicationConfigurationReplicationConfigurationRuleList" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_replication_configuration

ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcrReplicationConfigurationReplicationConfigurationRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcrReplicationConfigurationReplicationConfigurationRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>]]

---


### EcrReplicationConfigurationReplicationConfigurationRuleOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationRuleOutputReference" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_replication_configuration

ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putRepositoryFilter">put_repository_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resetRepositoryFilter">reset_repository_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination` <a name="put_destination" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putDestination"></a>

```python
def put_destination(
  value: typing.Union[IResolvable, typing.List[EcrReplicationConfigurationReplicationConfigurationRuleDestination]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putDestination.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>]]

---

##### `put_repository_filter` <a name="put_repository_filter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putRepositoryFilter"></a>

```python
def put_repository_filter(
  value: typing.Union[IResolvable, typing.List[EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putRepositoryFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>]]

---

##### `reset_repository_filter` <a name="reset_repository_filter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resetRepositoryFilter"></a>

```python
def reset_repository_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList">EcrReplicationConfigurationReplicationConfigurationRuleDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.repositoryFilter">repository_filter</a></code> | <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.destinationInput">destination_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.repositoryFilterInput">repository_filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.destination"></a>

```python
destination: EcrReplicationConfigurationReplicationConfigurationRuleDestinationList
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList">EcrReplicationConfigurationReplicationConfigurationRuleDestinationList</a>

---

##### `repository_filter`<sup>Required</sup> <a name="repository_filter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.repositoryFilter"></a>

```python
repository_filter: EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.destinationInput"></a>

```python
destination_input: typing.Union[IResolvable, typing.List[EcrReplicationConfigurationReplicationConfigurationRuleDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>]]

---

##### `repository_filter_input`<sup>Optional</sup> <a name="repository_filter_input" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.repositoryFilterInput"></a>

```python
repository_filter_input: typing.Union[IResolvable, typing.List[EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EcrReplicationConfigurationReplicationConfigurationRule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>, cdktf.IResolvable]

---


### EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList <a name="EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_replication_configuration

ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>]]

---


### EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_replication_configuration

ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>, cdktf.IResolvable]

---



