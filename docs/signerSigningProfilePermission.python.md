# `signerSigningProfilePermission` Submodule <a name="`signerSigningProfilePermission` Submodule" id="@cdktf/provider-aws.signerSigningProfilePermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignerSigningProfilePermission <a name="SignerSigningProfilePermission" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission aws_signer_signing_profile_permission}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_profile_permission

signerSigningProfilePermission.SignerSigningProfilePermission(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  principal: str,
  profile_name: str,
  id: str = None,
  profile_version: str = None,
  statement_id: str = None,
  statement_id_prefix: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#action SignerSigningProfilePermission#action}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#principal SignerSigningProfilePermission#principal}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#profile_name SignerSigningProfilePermission#profile_name}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#id SignerSigningProfilePermission#id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.profileVersion">profile_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#profile_version SignerSigningProfilePermission#profile_version}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.statementId">statement_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#statement_id SignerSigningProfilePermission#statement_id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.statementIdPrefix">statement_id_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#statement_id_prefix SignerSigningProfilePermission#statement_id_prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#action SignerSigningProfilePermission#action}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.principal"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#principal SignerSigningProfilePermission#principal}.

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.profileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#profile_name SignerSigningProfilePermission#profile_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#id SignerSigningProfilePermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `profile_version`<sup>Optional</sup> <a name="profile_version" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.profileVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#profile_version SignerSigningProfilePermission#profile_version}.

---

##### `statement_id`<sup>Optional</sup> <a name="statement_id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.statementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#statement_id SignerSigningProfilePermission#statement_id}.

---

##### `statement_id_prefix`<sup>Optional</sup> <a name="statement_id_prefix" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.Initializer.parameter.statementIdPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#statement_id_prefix SignerSigningProfilePermission#statement_id_prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetProfileVersion">reset_profile_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetStatementId">reset_statement_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetStatementIdPrefix">reset_statement_id_prefix</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_profile_version` <a name="reset_profile_version" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetProfileVersion"></a>

```python
def reset_profile_version() -> None
```

##### `reset_statement_id` <a name="reset_statement_id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetStatementId"></a>

```python
def reset_statement_id() -> None
```

##### `reset_statement_id_prefix` <a name="reset_statement_id_prefix" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.resetStatementIdPrefix"></a>

```python
def reset_statement_id_prefix() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_profile_permission

signerSigningProfilePermission.SignerSigningProfilePermission.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_profile_permission

signerSigningProfilePermission.SignerSigningProfilePermission.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_profile_permission

signerSigningProfilePermission.SignerSigningProfilePermission.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileNameInput">profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileVersionInput">profile_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdInput">statement_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdPrefixInput">statement_id_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileVersion">profile_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementId">statement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdPrefix">statement_id_prefix</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `profile_name_input`<sup>Optional</sup> <a name="profile_name_input" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileNameInput"></a>

```python
profile_name_input: str
```

- *Type:* str

---

##### `profile_version_input`<sup>Optional</sup> <a name="profile_version_input" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileVersionInput"></a>

```python
profile_version_input: str
```

- *Type:* str

---

##### `statement_id_input`<sup>Optional</sup> <a name="statement_id_input" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdInput"></a>

```python
statement_id_input: str
```

- *Type:* str

---

##### `statement_id_prefix_input`<sup>Optional</sup> <a name="statement_id_prefix_input" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdPrefixInput"></a>

```python
statement_id_prefix_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `profile_version`<sup>Required</sup> <a name="profile_version" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.profileVersion"></a>

```python
profile_version: str
```

- *Type:* str

---

##### `statement_id`<sup>Required</sup> <a name="statement_id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementId"></a>

```python
statement_id: str
```

- *Type:* str

---

##### `statement_id_prefix`<sup>Required</sup> <a name="statement_id_prefix" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.statementIdPrefix"></a>

```python
statement_id_prefix: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermission.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SignerSigningProfilePermissionConfig <a name="SignerSigningProfilePermissionConfig" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import signer_signing_profile_permission

signerSigningProfilePermission.SignerSigningProfilePermissionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  principal: str,
  profile_name: str,
  id: str = None,
  profile_version: str = None,
  statement_id: str = None,
  statement_id_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#action SignerSigningProfilePermission#action}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#principal SignerSigningProfilePermission#principal}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#profile_name SignerSigningProfilePermission#profile_name}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#id SignerSigningProfilePermission#id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.profileVersion">profile_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#profile_version SignerSigningProfilePermission#profile_version}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.statementId">statement_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#statement_id SignerSigningProfilePermission#statement_id}. |
| <code><a href="#@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.statementIdPrefix">statement_id_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#statement_id_prefix SignerSigningProfilePermission#statement_id_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#action SignerSigningProfilePermission#action}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#principal SignerSigningProfilePermission#principal}.

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#profile_name SignerSigningProfilePermission#profile_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#id SignerSigningProfilePermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `profile_version`<sup>Optional</sup> <a name="profile_version" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.profileVersion"></a>

```python
profile_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#profile_version SignerSigningProfilePermission#profile_version}.

---

##### `statement_id`<sup>Optional</sup> <a name="statement_id" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.statementId"></a>

```python
statement_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#statement_id SignerSigningProfilePermission#statement_id}.

---

##### `statement_id_prefix`<sup>Optional</sup> <a name="statement_id_prefix" id="@cdktf/provider-aws.signerSigningProfilePermission.SignerSigningProfilePermissionConfig.property.statementIdPrefix"></a>

```python
statement_id_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission#statement_id_prefix SignerSigningProfilePermission#statement_id_prefix}.

---



