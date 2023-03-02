# `organizationsDelegatedAdministrator` Submodule <a name="`organizationsDelegatedAdministrator` Submodule" id="@cdktf/provider-aws.organizationsDelegatedAdministrator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationsDelegatedAdministrator <a name="OrganizationsDelegatedAdministrator" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator aws_organizations_delegated_administrator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_delegated_administrator

organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  service_principal: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#account_id OrganizationsDelegatedAdministrator#account_id}. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.servicePrincipal">service_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#service_principal OrganizationsDelegatedAdministrator#service_principal}. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#id OrganizationsDelegatedAdministrator#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#account_id OrganizationsDelegatedAdministrator#account_id}.

---

##### `service_principal`<sup>Required</sup> <a name="service_principal" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.servicePrincipal"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#service_principal OrganizationsDelegatedAdministrator#service_principal}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#id OrganizationsDelegatedAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import organizations_delegated_administrator

organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import organizations_delegated_administrator

organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import organizations_delegated_administrator

organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.delegationEnabledDate">delegation_enabled_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.joinedMethod">joined_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.joinedTimestamp">joined_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.servicePrincipalInput">service_principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.servicePrincipal">service_principal</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `delegation_enabled_date`<sup>Required</sup> <a name="delegation_enabled_date" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.delegationEnabledDate"></a>

```python
delegation_enabled_date: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `joined_method`<sup>Required</sup> <a name="joined_method" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.joinedMethod"></a>

```python
joined_method: str
```

- *Type:* str

---

##### `joined_timestamp`<sup>Required</sup> <a name="joined_timestamp" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.joinedTimestamp"></a>

```python
joined_timestamp: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_principal_input`<sup>Optional</sup> <a name="service_principal_input" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.servicePrincipalInput"></a>

```python
service_principal_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_principal`<sup>Required</sup> <a name="service_principal" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.servicePrincipal"></a>

```python
service_principal: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministrator.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationsDelegatedAdministratorConfig <a name="OrganizationsDelegatedAdministratorConfig" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_delegated_administrator

organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  service_principal: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#account_id OrganizationsDelegatedAdministrator#account_id}. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.servicePrincipal">service_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#service_principal OrganizationsDelegatedAdministrator#service_principal}. |
| <code><a href="#@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#id OrganizationsDelegatedAdministrator#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#account_id OrganizationsDelegatedAdministrator#account_id}.

---

##### `service_principal`<sup>Required</sup> <a name="service_principal" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.servicePrincipal"></a>

```python
service_principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#service_principal OrganizationsDelegatedAdministrator#service_principal}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.organizationsDelegatedAdministrator.OrganizationsDelegatedAdministratorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_delegated_administrator#id OrganizationsDelegatedAdministrator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



