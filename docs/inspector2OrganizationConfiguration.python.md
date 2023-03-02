# `inspector2OrganizationConfiguration` Submodule <a name="`inspector2OrganizationConfiguration` Submodule" id="@cdktf/provider-aws.inspector2OrganizationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspector2OrganizationConfiguration <a name="Inspector2OrganizationConfiguration" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration aws_inspector2_organization_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import inspector2_organization_configuration

inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_enable: Inspector2OrganizationConfigurationAutoEnable,
  id: str = None,
  timeouts: Inspector2OrganizationConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.autoEnable">auto_enable</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a></code> | auto_enable block. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#id Inspector2OrganizationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_enable`<sup>Required</sup> <a name="auto_enable" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.autoEnable"></a>

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a>

auto_enable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#auto_enable Inspector2OrganizationConfiguration#auto_enable}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#id Inspector2OrganizationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#timeouts Inspector2OrganizationConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putAutoEnable">put_auto_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_auto_enable` <a name="put_auto_enable" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putAutoEnable"></a>

```python
def put_auto_enable(
  ec2: typing.Union[bool, IResolvable],
  ecr: typing.Union[bool, IResolvable]
) -> None
```

###### `ec2`<sup>Required</sup> <a name="ec2" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putAutoEnable.parameter.ec2"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#ec2 Inspector2OrganizationConfiguration#ec2}.

---

###### `ecr`<sup>Required</sup> <a name="ecr" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putAutoEnable.parameter.ecr"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#ecr Inspector2OrganizationConfiguration#ecr}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#create Inspector2OrganizationConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#delete Inspector2OrganizationConfiguration#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#update Inspector2OrganizationConfiguration#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import inspector2_organization_configuration

inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import inspector2_organization_configuration

inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import inspector2_organization_configuration

inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.autoEnable">auto_enable</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference">Inspector2OrganizationConfigurationAutoEnableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.maxAccountLimitReached">max_account_limit_reached</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference">Inspector2OrganizationConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.autoEnableInput">auto_enable_input</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_enable`<sup>Required</sup> <a name="auto_enable" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.autoEnable"></a>

```python
auto_enable: Inspector2OrganizationConfigurationAutoEnableOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference">Inspector2OrganizationConfigurationAutoEnableOutputReference</a>

---

##### `max_account_limit_reached`<sup>Required</sup> <a name="max_account_limit_reached" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.maxAccountLimitReached"></a>

```python
max_account_limit_reached: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.timeouts"></a>

```python
timeouts: Inspector2OrganizationConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference">Inspector2OrganizationConfigurationTimeoutsOutputReference</a>

---

##### `auto_enable_input`<sup>Optional</sup> <a name="auto_enable_input" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.autoEnableInput"></a>

```python
auto_enable_input: Inspector2OrganizationConfigurationAutoEnable
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[Inspector2OrganizationConfigurationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Inspector2OrganizationConfigurationAutoEnable <a name="Inspector2OrganizationConfigurationAutoEnable" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import inspector2_organization_configuration

inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable(
  ec2: typing.Union[bool, IResolvable],
  ecr: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.property.ec2">ec2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#ec2 Inspector2OrganizationConfiguration#ec2}. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.property.ecr">ecr</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#ecr Inspector2OrganizationConfiguration#ecr}. |

---

##### `ec2`<sup>Required</sup> <a name="ec2" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.property.ec2"></a>

```python
ec2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#ec2 Inspector2OrganizationConfiguration#ec2}.

---

##### `ecr`<sup>Required</sup> <a name="ecr" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.property.ecr"></a>

```python
ecr: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#ecr Inspector2OrganizationConfiguration#ecr}.

---

### Inspector2OrganizationConfigurationConfig <a name="Inspector2OrganizationConfigurationConfig" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import inspector2_organization_configuration

inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_enable: Inspector2OrganizationConfigurationAutoEnable,
  id: str = None,
  timeouts: Inspector2OrganizationConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.autoEnable">auto_enable</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a></code> | auto_enable block. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#id Inspector2OrganizationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_enable`<sup>Required</sup> <a name="auto_enable" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.autoEnable"></a>

```python
auto_enable: Inspector2OrganizationConfigurationAutoEnable
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a>

auto_enable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#auto_enable Inspector2OrganizationConfiguration#auto_enable}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#id Inspector2OrganizationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.timeouts"></a>

```python
timeouts: Inspector2OrganizationConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#timeouts Inspector2OrganizationConfiguration#timeouts}

---

### Inspector2OrganizationConfigurationTimeouts <a name="Inspector2OrganizationConfigurationTimeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import inspector2_organization_configuration

inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#create Inspector2OrganizationConfiguration#create}. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#delete Inspector2OrganizationConfiguration#delete}. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#update Inspector2OrganizationConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#create Inspector2OrganizationConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#delete Inspector2OrganizationConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#update Inspector2OrganizationConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspector2OrganizationConfigurationAutoEnableOutputReference <a name="Inspector2OrganizationConfigurationAutoEnableOutputReference" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import inspector2_organization_configuration

inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ec2Input">ec2_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ecrInput">ecr_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ec2">ec2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ecr">ecr</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ec2_input`<sup>Optional</sup> <a name="ec2_input" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ec2Input"></a>

```python
ec2_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ecr_input`<sup>Optional</sup> <a name="ecr_input" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ecrInput"></a>

```python
ecr_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ec2`<sup>Required</sup> <a name="ec2" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ec2"></a>

```python
ec2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ecr`<sup>Required</sup> <a name="ecr" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ecr"></a>

```python
ecr: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.internalValue"></a>

```python
internal_value: Inspector2OrganizationConfigurationAutoEnable
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a>

---


### Inspector2OrganizationConfigurationTimeoutsOutputReference <a name="Inspector2OrganizationConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import inspector2_organization_configuration

inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Inspector2OrganizationConfigurationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a>, cdktf.IResolvable]

---



