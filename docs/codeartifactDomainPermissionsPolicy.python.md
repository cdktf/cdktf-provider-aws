# `codeartifactDomainPermissionsPolicy` Submodule <a name="`codeartifactDomainPermissionsPolicy` Submodule" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeartifactDomainPermissionsPolicy <a name="CodeartifactDomainPermissionsPolicy" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy aws_codeartifact_domain_permissions_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_domain_permissions_policy

codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  policy_document: str,
  domain_owner: str = None,
  id: str = None,
  policy_revision: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#domain CodeartifactDomainPermissionsPolicy#domain}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.policyDocument">policy_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#policy_document CodeartifactDomainPermissionsPolicy#policy_document}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.domainOwner">domain_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#domain_owner CodeartifactDomainPermissionsPolicy#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#id CodeartifactDomainPermissionsPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.policyRevision">policy_revision</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#policy_revision CodeartifactDomainPermissionsPolicy#policy_revision}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#domain CodeartifactDomainPermissionsPolicy#domain}.

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.policyDocument"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#policy_document CodeartifactDomainPermissionsPolicy#policy_document}.

---

##### `domain_owner`<sup>Optional</sup> <a name="domain_owner" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.domainOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#domain_owner CodeartifactDomainPermissionsPolicy#domain_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#id CodeartifactDomainPermissionsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_revision`<sup>Optional</sup> <a name="policy_revision" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.policyRevision"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#policy_revision CodeartifactDomainPermissionsPolicy#policy_revision}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetDomainOwner">reset_domain_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetPolicyRevision">reset_policy_revision</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_domain_owner` <a name="reset_domain_owner" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetDomainOwner"></a>

```python
def reset_domain_owner() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy_revision` <a name="reset_policy_revision" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetPolicyRevision"></a>

```python
def reset_policy_revision() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_domain_permissions_policy

codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_domain_permissions_policy

codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_domain_permissions_policy

codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainOwnerInput">domain_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyDocumentInput">policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyRevisionInput">policy_revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainOwner">domain_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyRevision">policy_revision</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `domain_owner_input`<sup>Optional</sup> <a name="domain_owner_input" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainOwnerInput"></a>

```python
domain_owner_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_document_input`<sup>Optional</sup> <a name="policy_document_input" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyDocumentInput"></a>

```python
policy_document_input: str
```

- *Type:* str

---

##### `policy_revision_input`<sup>Optional</sup> <a name="policy_revision_input" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyRevisionInput"></a>

```python
policy_revision_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `domain_owner`<sup>Required</sup> <a name="domain_owner" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainOwner"></a>

```python
domain_owner: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `policy_revision`<sup>Required</sup> <a name="policy_revision" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyRevision"></a>

```python
policy_revision: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodeartifactDomainPermissionsPolicyConfig <a name="CodeartifactDomainPermissionsPolicyConfig" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_domain_permissions_policy

codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  policy_document: str,
  domain_owner: str = None,
  id: str = None,
  policy_revision: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#domain CodeartifactDomainPermissionsPolicy#domain}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.policyDocument">policy_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#policy_document CodeartifactDomainPermissionsPolicy#policy_document}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.domainOwner">domain_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#domain_owner CodeartifactDomainPermissionsPolicy#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#id CodeartifactDomainPermissionsPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.policyRevision">policy_revision</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#policy_revision CodeartifactDomainPermissionsPolicy#policy_revision}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#domain CodeartifactDomainPermissionsPolicy#domain}.

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#policy_document CodeartifactDomainPermissionsPolicy#policy_document}.

---

##### `domain_owner`<sup>Optional</sup> <a name="domain_owner" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.domainOwner"></a>

```python
domain_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#domain_owner CodeartifactDomainPermissionsPolicy#domain_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#id CodeartifactDomainPermissionsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_revision`<sup>Optional</sup> <a name="policy_revision" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.policyRevision"></a>

```python
policy_revision: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_domain_permissions_policy#policy_revision CodeartifactDomainPermissionsPolicy#policy_revision}.

---



