# `dataAwsOrganizationsOrganization` Submodule <a name="`dataAwsOrganizationsOrganization` Submodule" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsOrganization <a name="DataAwsOrganizationsOrganization" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_organization aws_organizations_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organization#id DataAwsOrganizationsOrganization#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organization#id DataAwsOrganizationsOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.accounts">accounts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList">DataAwsOrganizationsOrganizationAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.awsServiceAccessPrincipals">aws_service_access_principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.enabledPolicyTypes">enabled_policy_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.featureSet">feature_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.masterAccountArn">master_account_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.masterAccountEmail">master_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.masterAccountId">master_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.nonMasterAccounts">non_master_accounts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList">DataAwsOrganizationsOrganizationNonMasterAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.roots">roots</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList">DataAwsOrganizationsOrganizationRootsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.accounts"></a>

```python
accounts: DataAwsOrganizationsOrganizationAccountsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList">DataAwsOrganizationsOrganizationAccountsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `aws_service_access_principals`<sup>Required</sup> <a name="aws_service_access_principals" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.awsServiceAccessPrincipals"></a>

```python
aws_service_access_principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_policy_types`<sup>Required</sup> <a name="enabled_policy_types" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.enabledPolicyTypes"></a>

```python
enabled_policy_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `feature_set`<sup>Required</sup> <a name="feature_set" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.featureSet"></a>

```python
feature_set: str
```

- *Type:* str

---

##### `master_account_arn`<sup>Required</sup> <a name="master_account_arn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.masterAccountArn"></a>

```python
master_account_arn: str
```

- *Type:* str

---

##### `master_account_email`<sup>Required</sup> <a name="master_account_email" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.masterAccountEmail"></a>

```python
master_account_email: str
```

- *Type:* str

---

##### `master_account_id`<sup>Required</sup> <a name="master_account_id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.masterAccountId"></a>

```python
master_account_id: str
```

- *Type:* str

---

##### `non_master_accounts`<sup>Required</sup> <a name="non_master_accounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.nonMasterAccounts"></a>

```python
non_master_accounts: DataAwsOrganizationsOrganizationNonMasterAccountsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList">DataAwsOrganizationsOrganizationNonMasterAccountsList</a>

---

##### `roots`<sup>Required</sup> <a name="roots" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.roots"></a>

```python
roots: DataAwsOrganizationsOrganizationRootsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList">DataAwsOrganizationsOrganizationRootsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsOrganizationAccounts <a name="DataAwsOrganizationsOrganizationAccounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccounts()
```


### DataAwsOrganizationsOrganizationConfig <a name="DataAwsOrganizationsOrganizationConfig" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organization#id DataAwsOrganizationsOrganization#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organization#id DataAwsOrganizationsOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsOrganizationsOrganizationNonMasterAccounts <a name="DataAwsOrganizationsOrganizationNonMasterAccounts" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccounts()
```


### DataAwsOrganizationsOrganizationRoots <a name="DataAwsOrganizationsOrganizationRoots" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRoots"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRoots.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRoots()
```


### DataAwsOrganizationsOrganizationRootsPolicyTypes <a name="DataAwsOrganizationsOrganizationRootsPolicyTypes" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypes()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOrganizationsOrganizationAccountsList <a name="DataAwsOrganizationsOrganizationAccountsList" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOrganizationsOrganizationAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOrganizationsOrganizationAccountsOutputReference <a name="DataAwsOrganizationsOrganizationAccountsOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccounts">DataAwsOrganizationsOrganizationAccounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccountsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOrganizationsOrganizationAccounts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationAccounts">DataAwsOrganizationsOrganizationAccounts</a>

---


### DataAwsOrganizationsOrganizationNonMasterAccountsList <a name="DataAwsOrganizationsOrganizationNonMasterAccountsList" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference <a name="DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccounts">DataAwsOrganizationsOrganizationNonMasterAccounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOrganizationsOrganizationNonMasterAccounts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationNonMasterAccounts">DataAwsOrganizationsOrganizationNonMasterAccounts</a>

---


### DataAwsOrganizationsOrganizationRootsList <a name="DataAwsOrganizationsOrganizationRootsList" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOrganizationsOrganizationRootsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOrganizationsOrganizationRootsOutputReference <a name="DataAwsOrganizationsOrganizationRootsOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.policyTypes">policy_types</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList">DataAwsOrganizationsOrganizationRootsPolicyTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRoots">DataAwsOrganizationsOrganizationRoots</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_types`<sup>Required</sup> <a name="policy_types" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.policyTypes"></a>

```python
policy_types: DataAwsOrganizationsOrganizationRootsPolicyTypesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList">DataAwsOrganizationsOrganizationRootsPolicyTypesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOrganizationsOrganizationRoots
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRoots">DataAwsOrganizationsOrganizationRoots</a>

---


### DataAwsOrganizationsOrganizationRootsPolicyTypesList <a name="DataAwsOrganizationsOrganizationRootsPolicyTypesList" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference <a name="DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_organizations_organization

dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypes">DataAwsOrganizationsOrganizationRootsPolicyTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsOrganizationsOrganizationRootsPolicyTypes
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOrganizationsOrganization.DataAwsOrganizationsOrganizationRootsPolicyTypes">DataAwsOrganizationsOrganizationRootsPolicyTypes</a>

---



