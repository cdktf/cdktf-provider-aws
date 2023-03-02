# `kmsCustomKeyStore` Submodule <a name="`kmsCustomKeyStore` Submodule" id="@cdktf/provider-aws.kmsCustomKeyStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsCustomKeyStore <a name="KmsCustomKeyStore" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store aws_kms_custom_key_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStore(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_hsm_cluster_id: str,
  custom_key_store_name: str,
  key_store_password: str,
  trust_anchor_certificate: str,
  id: str = None,
  timeouts: KmsCustomKeyStoreTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.cloudHsmClusterId">cloud_hsm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.customKeyStoreName">custom_key_store_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.keyStorePassword">key_store_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.trustAnchorCertificate">trust_anchor_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#id KmsCustomKeyStore#id}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_hsm_cluster_id`<sup>Required</sup> <a name="cloud_hsm_cluster_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.cloudHsmClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}.

---

##### `custom_key_store_name`<sup>Required</sup> <a name="custom_key_store_name" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.customKeyStoreName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}.

---

##### `key_store_password`<sup>Required</sup> <a name="key_store_password" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.keyStorePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}.

---

##### `trust_anchor_certificate`<sup>Required</sup> <a name="trust_anchor_certificate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.trustAnchorCertificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#id KmsCustomKeyStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#timeouts KmsCustomKeyStore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#create KmsCustomKeyStore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#delete KmsCustomKeyStore#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#update KmsCustomKeyStore#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference">KmsCustomKeyStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterIdInput">cloud_hsm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreNameInput">custom_key_store_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePasswordInput">key_store_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificateInput">trust_anchor_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterId">cloud_hsm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreName">custom_key_store_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePassword">key_store_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificate">trust_anchor_certificate</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeouts"></a>

```python
timeouts: KmsCustomKeyStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference">KmsCustomKeyStoreTimeoutsOutputReference</a>

---

##### `cloud_hsm_cluster_id_input`<sup>Optional</sup> <a name="cloud_hsm_cluster_id_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterIdInput"></a>

```python
cloud_hsm_cluster_id_input: str
```

- *Type:* str

---

##### `custom_key_store_name_input`<sup>Optional</sup> <a name="custom_key_store_name_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreNameInput"></a>

```python
custom_key_store_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_store_password_input`<sup>Optional</sup> <a name="key_store_password_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePasswordInput"></a>

```python
key_store_password_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[KmsCustomKeyStoreTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>, cdktf.IResolvable]

---

##### `trust_anchor_certificate_input`<sup>Optional</sup> <a name="trust_anchor_certificate_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificateInput"></a>

```python
trust_anchor_certificate_input: str
```

- *Type:* str

---

##### `cloud_hsm_cluster_id`<sup>Required</sup> <a name="cloud_hsm_cluster_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.cloudHsmClusterId"></a>

```python
cloud_hsm_cluster_id: str
```

- *Type:* str

---

##### `custom_key_store_name`<sup>Required</sup> <a name="custom_key_store_name" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.customKeyStoreName"></a>

```python
custom_key_store_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_store_password`<sup>Required</sup> <a name="key_store_password" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.keyStorePassword"></a>

```python
key_store_password: str
```

- *Type:* str

---

##### `trust_anchor_certificate`<sup>Required</sup> <a name="trust_anchor_certificate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.trustAnchorCertificate"></a>

```python
trust_anchor_certificate: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmsCustomKeyStoreConfig <a name="KmsCustomKeyStoreConfig" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloud_hsm_cluster_id: str,
  custom_key_store_name: str,
  key_store_password: str,
  trust_anchor_certificate: str,
  id: str = None,
  timeouts: KmsCustomKeyStoreTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.cloudHsmClusterId">cloud_hsm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.customKeyStoreName">custom_key_store_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.keyStorePassword">key_store_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.trustAnchorCertificate">trust_anchor_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#id KmsCustomKeyStore#id}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloud_hsm_cluster_id`<sup>Required</sup> <a name="cloud_hsm_cluster_id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.cloudHsmClusterId"></a>

```python
cloud_hsm_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}.

---

##### `custom_key_store_name`<sup>Required</sup> <a name="custom_key_store_name" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.customKeyStoreName"></a>

```python
custom_key_store_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}.

---

##### `key_store_password`<sup>Required</sup> <a name="key_store_password" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.keyStorePassword"></a>

```python
key_store_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}.

---

##### `trust_anchor_certificate`<sup>Required</sup> <a name="trust_anchor_certificate" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.trustAnchorCertificate"></a>

```python
trust_anchor_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#id KmsCustomKeyStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreConfig.property.timeouts"></a>

```python
timeouts: KmsCustomKeyStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#timeouts KmsCustomKeyStore#timeouts}

---

### KmsCustomKeyStoreTimeouts <a name="KmsCustomKeyStoreTimeouts" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#create KmsCustomKeyStore#create}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#delete KmsCustomKeyStore#delete}. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#update KmsCustomKeyStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#create KmsCustomKeyStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#delete KmsCustomKeyStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_custom_key_store#update KmsCustomKeyStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsCustomKeyStoreTimeoutsOutputReference <a name="KmsCustomKeyStoreTimeoutsOutputReference" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kms_custom_key_store

kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KmsCustomKeyStoreTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kmsCustomKeyStore.KmsCustomKeyStoreTimeouts">KmsCustomKeyStoreTimeouts</a>, cdktf.IResolvable]

---



