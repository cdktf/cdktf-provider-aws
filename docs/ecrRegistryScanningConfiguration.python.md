# `ecrRegistryScanningConfiguration` Submodule <a name="`ecrRegistryScanningConfiguration` Submodule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrRegistryScanningConfiguration <a name="EcrRegistryScanningConfiguration" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration aws_ecr_registry_scanning_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scan_type: str,
  id: str = None,
  rule: typing.Union[IResolvable, typing.List[EcrRegistryScanningConfigurationRule]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scanType">scan_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#scan_type EcrRegistryScanningConfiguration#scan_type}. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#id EcrRegistryScanningConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>]]</code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scan_type`<sup>Required</sup> <a name="scan_type" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scanType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#scan_type EcrRegistryScanningConfiguration#scan_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#id EcrRegistryScanningConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#rule EcrRegistryScanningConfiguration#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetRule">reset_rule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[EcrRegistryScanningConfigurationRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetRule"></a>

```python
def reset_rule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.registryId">registry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList">EcrRegistryScanningConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanTypeInput">scan_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanType">scan_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `registry_id`<sup>Required</sup> <a name="registry_id" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.registryId"></a>

```python
registry_id: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rule"></a>

```python
rule: EcrRegistryScanningConfigurationRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList">EcrRegistryScanningConfigurationRuleList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[EcrRegistryScanningConfigurationRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>]]

---

##### `scan_type_input`<sup>Optional</sup> <a name="scan_type_input" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanTypeInput"></a>

```python
scan_type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scan_type`<sup>Required</sup> <a name="scan_type" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanType"></a>

```python
scan_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcrRegistryScanningConfigurationConfig <a name="EcrRegistryScanningConfigurationConfig" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scan_type: str,
  id: str = None,
  rule: typing.Union[IResolvable, typing.List[EcrRegistryScanningConfigurationRule]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.scanType">scan_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#scan_type EcrRegistryScanningConfiguration#scan_type}. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#id EcrRegistryScanningConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>]]</code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scan_type`<sup>Required</sup> <a name="scan_type" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.scanType"></a>

```python
scan_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#scan_type EcrRegistryScanningConfiguration#scan_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#id EcrRegistryScanningConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[EcrRegistryScanningConfigurationRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#rule EcrRegistryScanningConfiguration#rule}

---

### EcrRegistryScanningConfigurationRule <a name="EcrRegistryScanningConfigurationRule" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule(
  repository_filter: typing.Union[IResolvable, typing.List[EcrRegistryScanningConfigurationRuleRepositoryFilter]],
  scan_frequency: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule.property.repositoryFilter">repository_filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a>]]</code> | repository_filter block. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule.property.scanFrequency">scan_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#scan_frequency EcrRegistryScanningConfiguration#scan_frequency}. |

---

##### `repository_filter`<sup>Required</sup> <a name="repository_filter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule.property.repositoryFilter"></a>

```python
repository_filter: typing.Union[IResolvable, typing.List[EcrRegistryScanningConfigurationRuleRepositoryFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a>]]

repository_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#repository_filter EcrRegistryScanningConfiguration#repository_filter}

---

##### `scan_frequency`<sup>Required</sup> <a name="scan_frequency" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule.property.scanFrequency"></a>

```python
scan_frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#scan_frequency EcrRegistryScanningConfiguration#scan_frequency}.

---

### EcrRegistryScanningConfigurationRuleRepositoryFilter <a name="EcrRegistryScanningConfigurationRuleRepositoryFilter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter(
  filter: str,
  filter_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#filter EcrRegistryScanningConfiguration#filter}. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter.property.filterType">filter_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#filter_type EcrRegistryScanningConfiguration#filter_type}. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#filter EcrRegistryScanningConfiguration#filter}.

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_registry_scanning_configuration#filter_type EcrRegistryScanningConfiguration#filter_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcrRegistryScanningConfigurationRuleList <a name="EcrRegistryScanningConfigurationRuleList" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcrRegistryScanningConfigurationRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcrRegistryScanningConfigurationRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>]]

---


### EcrRegistryScanningConfigurationRuleOutputReference <a name="EcrRegistryScanningConfigurationRuleOutputReference" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.putRepositoryFilter">put_repository_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_repository_filter` <a name="put_repository_filter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.putRepositoryFilter"></a>

```python
def put_repository_filter(
  value: typing.Union[IResolvable, typing.List[EcrRegistryScanningConfigurationRuleRepositoryFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.putRepositoryFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.repositoryFilter">repository_filter</a></code> | <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList">EcrRegistryScanningConfigurationRuleRepositoryFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.repositoryFilterInput">repository_filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.scanFrequencyInput">scan_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.scanFrequency">scan_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_filter`<sup>Required</sup> <a name="repository_filter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.repositoryFilter"></a>

```python
repository_filter: EcrRegistryScanningConfigurationRuleRepositoryFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList">EcrRegistryScanningConfigurationRuleRepositoryFilterList</a>

---

##### `repository_filter_input`<sup>Optional</sup> <a name="repository_filter_input" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.repositoryFilterInput"></a>

```python
repository_filter_input: typing.Union[IResolvable, typing.List[EcrRegistryScanningConfigurationRuleRepositoryFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a>]]

---

##### `scan_frequency_input`<sup>Optional</sup> <a name="scan_frequency_input" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.scanFrequencyInput"></a>

```python
scan_frequency_input: str
```

- *Type:* str

---

##### `scan_frequency`<sup>Required</sup> <a name="scan_frequency" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.scanFrequency"></a>

```python
scan_frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EcrRegistryScanningConfigurationRule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRule">EcrRegistryScanningConfigurationRule</a>, cdktf.IResolvable]

---


### EcrRegistryScanningConfigurationRuleRepositoryFilterList <a name="EcrRegistryScanningConfigurationRuleRepositoryFilterList" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcrRegistryScanningConfigurationRuleRepositoryFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a>]]

---


### EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference <a name="EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_registry_scanning_configuration

ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EcrRegistryScanningConfigurationRuleRepositoryFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRuleRepositoryFilter">EcrRegistryScanningConfigurationRuleRepositoryFilter</a>, cdktf.IResolvable]

---



