# `organizationsOrganization` Submodule <a name="`organizationsOrganization` Submodule" id="@cdktf/provider-aws.organizationsOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationsOrganization <a name="OrganizationsOrganization" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization aws_organizations_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganization(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_service_access_principals: typing.List[str] = None,
  enabled_policy_types: typing.List[str] = None,
  feature_set: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.awsServiceAccessPrincipals">aws_service_access_principals</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#aws_service_access_principals OrganizationsOrganization#aws_service_access_principals}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.enabledPolicyTypes">enabled_policy_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#enabled_policy_types OrganizationsOrganization#enabled_policy_types}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.featureSet">feature_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#feature_set OrganizationsOrganization#feature_set}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#id OrganizationsOrganization#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_service_access_principals`<sup>Optional</sup> <a name="aws_service_access_principals" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.awsServiceAccessPrincipals"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#aws_service_access_principals OrganizationsOrganization#aws_service_access_principals}.

---

##### `enabled_policy_types`<sup>Optional</sup> <a name="enabled_policy_types" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.enabledPolicyTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#enabled_policy_types OrganizationsOrganization#enabled_policy_types}.

---

##### `feature_set`<sup>Optional</sup> <a name="feature_set" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.featureSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#feature_set OrganizationsOrganization#feature_set}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#id OrganizationsOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetAwsServiceAccessPrincipals">reset_aws_service_access_principals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetEnabledPolicyTypes">reset_enabled_policy_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetFeatureSet">reset_feature_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_aws_service_access_principals` <a name="reset_aws_service_access_principals" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetAwsServiceAccessPrincipals"></a>

```python
def reset_aws_service_access_principals() -> None
```

##### `reset_enabled_policy_types` <a name="reset_enabled_policy_types" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetEnabledPolicyTypes"></a>

```python
def reset_enabled_policy_types() -> None
```

##### `reset_feature_set` <a name="reset_feature_set" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetFeatureSet"></a>

```python
def reset_feature_set() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.accounts">accounts</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList">OrganizationsOrganizationAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.masterAccountArn">master_account_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.masterAccountEmail">master_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.masterAccountId">master_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.nonMasterAccounts">non_master_accounts</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList">OrganizationsOrganizationNonMasterAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.roots">roots</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList">OrganizationsOrganizationRootsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.awsServiceAccessPrincipalsInput">aws_service_access_principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.enabledPolicyTypesInput">enabled_policy_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.featureSetInput">feature_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.awsServiceAccessPrincipals">aws_service_access_principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.enabledPolicyTypes">enabled_policy_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.featureSet">feature_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.accounts"></a>

```python
accounts: OrganizationsOrganizationAccountsList
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList">OrganizationsOrganizationAccountsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `master_account_arn`<sup>Required</sup> <a name="master_account_arn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.masterAccountArn"></a>

```python
master_account_arn: str
```

- *Type:* str

---

##### `master_account_email`<sup>Required</sup> <a name="master_account_email" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.masterAccountEmail"></a>

```python
master_account_email: str
```

- *Type:* str

---

##### `master_account_id`<sup>Required</sup> <a name="master_account_id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.masterAccountId"></a>

```python
master_account_id: str
```

- *Type:* str

---

##### `non_master_accounts`<sup>Required</sup> <a name="non_master_accounts" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.nonMasterAccounts"></a>

```python
non_master_accounts: OrganizationsOrganizationNonMasterAccountsList
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList">OrganizationsOrganizationNonMasterAccountsList</a>

---

##### `roots`<sup>Required</sup> <a name="roots" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.roots"></a>

```python
roots: OrganizationsOrganizationRootsList
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList">OrganizationsOrganizationRootsList</a>

---

##### `aws_service_access_principals_input`<sup>Optional</sup> <a name="aws_service_access_principals_input" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.awsServiceAccessPrincipalsInput"></a>

```python
aws_service_access_principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_policy_types_input`<sup>Optional</sup> <a name="enabled_policy_types_input" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.enabledPolicyTypesInput"></a>

```python
enabled_policy_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `feature_set_input`<sup>Optional</sup> <a name="feature_set_input" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.featureSetInput"></a>

```python
feature_set_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `aws_service_access_principals`<sup>Required</sup> <a name="aws_service_access_principals" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.awsServiceAccessPrincipals"></a>

```python
aws_service_access_principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_policy_types`<sup>Required</sup> <a name="enabled_policy_types" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.enabledPolicyTypes"></a>

```python
enabled_policy_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `feature_set`<sup>Required</sup> <a name="feature_set" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.featureSet"></a>

```python
feature_set: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationsOrganizationAccounts <a name="OrganizationsOrganizationAccounts" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganizationAccounts()
```


### OrganizationsOrganizationConfig <a name="OrganizationsOrganizationConfig" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_service_access_principals: typing.List[str] = None,
  enabled_policy_types: typing.List[str] = None,
  feature_set: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.awsServiceAccessPrincipals">aws_service_access_principals</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#aws_service_access_principals OrganizationsOrganization#aws_service_access_principals}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.enabledPolicyTypes">enabled_policy_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#enabled_policy_types OrganizationsOrganization#enabled_policy_types}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.featureSet">feature_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#feature_set OrganizationsOrganization#feature_set}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#id OrganizationsOrganization#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_service_access_principals`<sup>Optional</sup> <a name="aws_service_access_principals" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.awsServiceAccessPrincipals"></a>

```python
aws_service_access_principals: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#aws_service_access_principals OrganizationsOrganization#aws_service_access_principals}.

---

##### `enabled_policy_types`<sup>Optional</sup> <a name="enabled_policy_types" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.enabledPolicyTypes"></a>

```python
enabled_policy_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#enabled_policy_types OrganizationsOrganization#enabled_policy_types}.

---

##### `feature_set`<sup>Optional</sup> <a name="feature_set" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.featureSet"></a>

```python
feature_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#feature_set OrganizationsOrganization#feature_set}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#id OrganizationsOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OrganizationsOrganizationNonMasterAccounts <a name="OrganizationsOrganizationNonMasterAccounts" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganizationNonMasterAccounts()
```


### OrganizationsOrganizationRoots <a name="OrganizationsOrganizationRoots" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRoots"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRoots.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganizationRoots()
```


### OrganizationsOrganizationRootsPolicyTypes <a name="OrganizationsOrganizationRootsPolicyTypes" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganizationRootsPolicyTypes()
```


## Classes <a name="Classes" id="Classes"></a>

### OrganizationsOrganizationAccountsList <a name="OrganizationsOrganizationAccountsList" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganizationAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrganizationsOrganizationAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OrganizationsOrganizationAccountsOutputReference <a name="OrganizationsOrganizationAccountsOutputReference" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganizationAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccounts">OrganizationsOrganizationAccounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationsOrganizationAccounts
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccounts">OrganizationsOrganizationAccounts</a>

---


### OrganizationsOrganizationNonMasterAccountsList <a name="OrganizationsOrganizationNonMasterAccountsList" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrganizationsOrganizationNonMasterAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OrganizationsOrganizationNonMasterAccountsOutputReference <a name="OrganizationsOrganizationNonMasterAccountsOutputReference" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccounts">OrganizationsOrganizationNonMasterAccounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationsOrganizationNonMasterAccounts
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccounts">OrganizationsOrganizationNonMasterAccounts</a>

---


### OrganizationsOrganizationRootsList <a name="OrganizationsOrganizationRootsList" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganizationRootsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrganizationsOrganizationRootsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OrganizationsOrganizationRootsOutputReference <a name="OrganizationsOrganizationRootsOutputReference" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganizationRootsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.policyTypes">policy_types</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList">OrganizationsOrganizationRootsPolicyTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRoots">OrganizationsOrganizationRoots</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_types`<sup>Required</sup> <a name="policy_types" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.policyTypes"></a>

```python
policy_types: OrganizationsOrganizationRootsPolicyTypesList
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList">OrganizationsOrganizationRootsPolicyTypesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationsOrganizationRoots
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRoots">OrganizationsOrganizationRoots</a>

---


### OrganizationsOrganizationRootsPolicyTypesList <a name="OrganizationsOrganizationRootsPolicyTypesList" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrganizationsOrganizationRootsPolicyTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OrganizationsOrganizationRootsPolicyTypesOutputReference <a name="OrganizationsOrganizationRootsPolicyTypesOutputReference" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import organizations_organization

organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypes">OrganizationsOrganizationRootsPolicyTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.internalValue"></a>

```python
internal_value: OrganizationsOrganizationRootsPolicyTypes
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypes">OrganizationsOrganizationRootsPolicyTypes</a>

---



