# `auditmanagerFrameworkShare` Submodule <a name="`auditmanagerFrameworkShare` Submodule" id="@cdktf/provider-aws.auditmanagerFrameworkShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerFrameworkShare <a name="AuditmanagerFrameworkShare" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share aws_auditmanager_framework_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_framework_share

auditmanagerFrameworkShare.AuditmanagerFrameworkShare(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_account: str,
  destination_region: str,
  framework_id: str,
  comment: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.destinationAccount">destination_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#destination_account AuditmanagerFrameworkShare#destination_account}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.destinationRegion">destination_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#destination_region AuditmanagerFrameworkShare#destination_region}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.frameworkId">framework_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#framework_id AuditmanagerFrameworkShare#framework_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#comment AuditmanagerFrameworkShare#comment}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_account`<sup>Required</sup> <a name="destination_account" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.destinationAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#destination_account AuditmanagerFrameworkShare#destination_account}.

---

##### `destination_region`<sup>Required</sup> <a name="destination_region" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.destinationRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#destination_region AuditmanagerFrameworkShare#destination_region}.

---

##### `framework_id`<sup>Required</sup> <a name="framework_id" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.frameworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#framework_id AuditmanagerFrameworkShare#framework_id}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#comment AuditmanagerFrameworkShare#comment}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.resetComment">reset_comment</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.resetComment"></a>

```python
def reset_comment() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_framework_share

auditmanagerFrameworkShare.AuditmanagerFrameworkShare.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_framework_share

auditmanagerFrameworkShare.AuditmanagerFrameworkShare.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_framework_share

auditmanagerFrameworkShare.AuditmanagerFrameworkShare.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.destinationAccountInput">destination_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.destinationRegionInput">destination_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.frameworkIdInput">framework_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.destinationAccount">destination_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.destinationRegion">destination_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.frameworkId">framework_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `destination_account_input`<sup>Optional</sup> <a name="destination_account_input" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.destinationAccountInput"></a>

```python
destination_account_input: str
```

- *Type:* str

---

##### `destination_region_input`<sup>Optional</sup> <a name="destination_region_input" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.destinationRegionInput"></a>

```python
destination_region_input: str
```

- *Type:* str

---

##### `framework_id_input`<sup>Optional</sup> <a name="framework_id_input" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.frameworkIdInput"></a>

```python
framework_id_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `destination_account`<sup>Required</sup> <a name="destination_account" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.destinationAccount"></a>

```python
destination_account: str
```

- *Type:* str

---

##### `destination_region`<sup>Required</sup> <a name="destination_region" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.destinationRegion"></a>

```python
destination_region: str
```

- *Type:* str

---

##### `framework_id`<sup>Required</sup> <a name="framework_id" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.frameworkId"></a>

```python
framework_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShare.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerFrameworkShareConfig <a name="AuditmanagerFrameworkShareConfig" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_framework_share

auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_account: str,
  destination_region: str,
  framework_id: str,
  comment: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.destinationAccount">destination_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#destination_account AuditmanagerFrameworkShare#destination_account}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.destinationRegion">destination_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#destination_region AuditmanagerFrameworkShare#destination_region}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.frameworkId">framework_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#framework_id AuditmanagerFrameworkShare#framework_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#comment AuditmanagerFrameworkShare#comment}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_account`<sup>Required</sup> <a name="destination_account" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.destinationAccount"></a>

```python
destination_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#destination_account AuditmanagerFrameworkShare#destination_account}.

---

##### `destination_region`<sup>Required</sup> <a name="destination_region" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.destinationRegion"></a>

```python
destination_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#destination_region AuditmanagerFrameworkShare#destination_region}.

---

##### `framework_id`<sup>Required</sup> <a name="framework_id" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.frameworkId"></a>

```python
framework_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#framework_id AuditmanagerFrameworkShare#framework_id}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.auditmanagerFrameworkShare.AuditmanagerFrameworkShareConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#comment AuditmanagerFrameworkShare#comment}.

---



