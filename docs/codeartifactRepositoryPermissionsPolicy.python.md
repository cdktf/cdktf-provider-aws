# `codeartifactRepositoryPermissionsPolicy` Submodule <a name="`codeartifactRepositoryPermissionsPolicy` Submodule" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeartifactRepositoryPermissionsPolicy <a name="CodeartifactRepositoryPermissionsPolicy" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy aws_codeartifact_repository_permissions_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_repository_permissions_policy

codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy(
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
  repository: str,
  domain_owner: str = None,
  id: str = None,
  policy_revision: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain CodeartifactRepositoryPermissionsPolicy#domain}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.policyDocument">policy_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_document CodeartifactRepositoryPermissionsPolicy#policy_document}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#repository CodeartifactRepositoryPermissionsPolicy#repository}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.domainOwner">domain_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain_owner CodeartifactRepositoryPermissionsPolicy#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#id CodeartifactRepositoryPermissionsPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.policyRevision">policy_revision</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_revision CodeartifactRepositoryPermissionsPolicy#policy_revision}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain CodeartifactRepositoryPermissionsPolicy#domain}.

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.policyDocument"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_document CodeartifactRepositoryPermissionsPolicy#policy_document}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.repository"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#repository CodeartifactRepositoryPermissionsPolicy#repository}.

---

##### `domain_owner`<sup>Optional</sup> <a name="domain_owner" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.domainOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain_owner CodeartifactRepositoryPermissionsPolicy#domain_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#id CodeartifactRepositoryPermissionsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_revision`<sup>Optional</sup> <a name="policy_revision" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.policyRevision"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_revision CodeartifactRepositoryPermissionsPolicy#policy_revision}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetDomainOwner">reset_domain_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetPolicyRevision">reset_policy_revision</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_domain_owner` <a name="reset_domain_owner" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetDomainOwner"></a>

```python
def reset_domain_owner() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy_revision` <a name="reset_policy_revision" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetPolicyRevision"></a>

```python
def reset_policy_revision() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_repository_permissions_policy

codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_repository_permissions_policy

codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_repository_permissions_policy

codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainOwnerInput">domain_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyDocumentInput">policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyRevisionInput">policy_revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainOwner">domain_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyRevision">policy_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.repository">repository</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `domain_owner_input`<sup>Optional</sup> <a name="domain_owner_input" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainOwnerInput"></a>

```python
domain_owner_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_document_input`<sup>Optional</sup> <a name="policy_document_input" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyDocumentInput"></a>

```python
policy_document_input: str
```

- *Type:* str

---

##### `policy_revision_input`<sup>Optional</sup> <a name="policy_revision_input" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyRevisionInput"></a>

```python
policy_revision_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `domain_owner`<sup>Required</sup> <a name="domain_owner" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainOwner"></a>

```python
domain_owner: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `policy_revision`<sup>Required</sup> <a name="policy_revision" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyRevision"></a>

```python
policy_revision: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodeartifactRepositoryPermissionsPolicyConfig <a name="CodeartifactRepositoryPermissionsPolicyConfig" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_repository_permissions_policy

codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  policy_document: str,
  repository: str,
  domain_owner: str = None,
  id: str = None,
  policy_revision: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain CodeartifactRepositoryPermissionsPolicy#domain}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.policyDocument">policy_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_document CodeartifactRepositoryPermissionsPolicy#policy_document}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#repository CodeartifactRepositoryPermissionsPolicy#repository}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.domainOwner">domain_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain_owner CodeartifactRepositoryPermissionsPolicy#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#id CodeartifactRepositoryPermissionsPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.policyRevision">policy_revision</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_revision CodeartifactRepositoryPermissionsPolicy#policy_revision}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain CodeartifactRepositoryPermissionsPolicy#domain}.

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_document CodeartifactRepositoryPermissionsPolicy#policy_document}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#repository CodeartifactRepositoryPermissionsPolicy#repository}.

---

##### `domain_owner`<sup>Optional</sup> <a name="domain_owner" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.domainOwner"></a>

```python
domain_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain_owner CodeartifactRepositoryPermissionsPolicy#domain_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#id CodeartifactRepositoryPermissionsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_revision`<sup>Optional</sup> <a name="policy_revision" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.policyRevision"></a>

```python
policy_revision: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_revision CodeartifactRepositoryPermissionsPolicy#policy_revision}.

---



