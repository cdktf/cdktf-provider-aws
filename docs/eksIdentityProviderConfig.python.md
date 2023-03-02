# `eksIdentityProviderConfig` Submodule <a name="`eksIdentityProviderConfig` Submodule" id="@cdktf/provider-aws.eksIdentityProviderConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksIdentityProviderConfig <a name="EksIdentityProviderConfig" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config aws_eks_identity_provider_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  oidc: EksIdentityProviderConfigOidc,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: EksIdentityProviderConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#cluster_name EksIdentityProviderConfig#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#id EksIdentityProviderConfig#id}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags EksIdentityProviderConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags_all EksIdentityProviderConfig#tags_all}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#cluster_name EksIdentityProviderConfig#cluster_name}.

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.oidc"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#oidc EksIdentityProviderConfig#oidc}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#id EksIdentityProviderConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags EksIdentityProviderConfig#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags_all EksIdentityProviderConfig#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#timeouts EksIdentityProviderConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc">put_oidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_oidc` <a name="put_oidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc"></a>

```python
def put_oidc(
  client_id: str,
  identity_provider_config_name: str,
  issuer_url: str,
  groups_claim: str = None,
  groups_prefix: str = None,
  required_claims: typing.Mapping[str] = None,
  username_claim: str = None,
  username_prefix: str = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#client_id EksIdentityProviderConfig#client_id}.

---

###### `identity_provider_config_name`<sup>Required</sup> <a name="identity_provider_config_name" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.identityProviderConfigName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}.

---

###### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.issuerUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#issuer_url EksIdentityProviderConfig#issuer_url}.

---

###### `groups_claim`<sup>Optional</sup> <a name="groups_claim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.groupsClaim"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_claim EksIdentityProviderConfig#groups_claim}.

---

###### `groups_prefix`<sup>Optional</sup> <a name="groups_prefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.groupsPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_prefix EksIdentityProviderConfig#groups_prefix}.

---

###### `required_claims`<sup>Optional</sup> <a name="required_claims" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.requiredClaims"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#required_claims EksIdentityProviderConfig#required_claims}.

---

###### `username_claim`<sup>Optional</sup> <a name="username_claim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.usernameClaim"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_claim EksIdentityProviderConfig#username_claim}.

---

###### `username_prefix`<sup>Optional</sup> <a name="username_prefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.usernamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_prefix EksIdentityProviderConfig#username_prefix}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#create EksIdentityProviderConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#delete EksIdentityProviderConfig#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference">EksIdentityProviderConfigOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference">EksIdentityProviderConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidcInput">oidc_input</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidc"></a>

```python
oidc: EksIdentityProviderConfigOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference">EksIdentityProviderConfigOidcOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeouts"></a>

```python
timeouts: EksIdentityProviderConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference">EksIdentityProviderConfigTimeoutsOutputReference</a>

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `oidc_input`<sup>Optional</sup> <a name="oidc_input" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidcInput"></a>

```python
oidc_input: EksIdentityProviderConfigOidc
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[EksIdentityProviderConfigTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a>, cdktf.IResolvable]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EksIdentityProviderConfigConfig <a name="EksIdentityProviderConfigConfig" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  oidc: EksIdentityProviderConfigOidc,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: EksIdentityProviderConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#cluster_name EksIdentityProviderConfig#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#id EksIdentityProviderConfig#id}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags EksIdentityProviderConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags_all EksIdentityProviderConfig#tags_all}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#cluster_name EksIdentityProviderConfig#cluster_name}.

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.oidc"></a>

```python
oidc: EksIdentityProviderConfigOidc
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#oidc EksIdentityProviderConfig#oidc}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#id EksIdentityProviderConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags EksIdentityProviderConfig#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#tags_all EksIdentityProviderConfig#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.timeouts"></a>

```python
timeouts: EksIdentityProviderConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#timeouts EksIdentityProviderConfig#timeouts}

---

### EksIdentityProviderConfigOidc <a name="EksIdentityProviderConfigOidc" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfigOidc(
  client_id: str,
  identity_provider_config_name: str,
  issuer_url: str,
  groups_claim: str = None,
  groups_prefix: str = None,
  required_claims: typing.Mapping[str] = None,
  username_claim: str = None,
  username_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#client_id EksIdentityProviderConfig#client_id}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.identityProviderConfigName">identity_provider_config_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.issuerUrl">issuer_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#issuer_url EksIdentityProviderConfig#issuer_url}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsClaim">groups_claim</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_claim EksIdentityProviderConfig#groups_claim}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsPrefix">groups_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_prefix EksIdentityProviderConfig#groups_prefix}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.requiredClaims">required_claims</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#required_claims EksIdentityProviderConfig#required_claims}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernameClaim">username_claim</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_claim EksIdentityProviderConfig#username_claim}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernamePrefix">username_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_prefix EksIdentityProviderConfig#username_prefix}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#client_id EksIdentityProviderConfig#client_id}.

---

##### `identity_provider_config_name`<sup>Required</sup> <a name="identity_provider_config_name" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.identityProviderConfigName"></a>

```python
identity_provider_config_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}.

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#issuer_url EksIdentityProviderConfig#issuer_url}.

---

##### `groups_claim`<sup>Optional</sup> <a name="groups_claim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsClaim"></a>

```python
groups_claim: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_claim EksIdentityProviderConfig#groups_claim}.

---

##### `groups_prefix`<sup>Optional</sup> <a name="groups_prefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsPrefix"></a>

```python
groups_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#groups_prefix EksIdentityProviderConfig#groups_prefix}.

---

##### `required_claims`<sup>Optional</sup> <a name="required_claims" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.requiredClaims"></a>

```python
required_claims: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#required_claims EksIdentityProviderConfig#required_claims}.

---

##### `username_claim`<sup>Optional</sup> <a name="username_claim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernameClaim"></a>

```python
username_claim: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_claim EksIdentityProviderConfig#username_claim}.

---

##### `username_prefix`<sup>Optional</sup> <a name="username_prefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernamePrefix"></a>

```python
username_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#username_prefix EksIdentityProviderConfig#username_prefix}.

---

### EksIdentityProviderConfigTimeouts <a name="EksIdentityProviderConfigTimeouts" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#create EksIdentityProviderConfig#create}. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#delete EksIdentityProviderConfig#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#create EksIdentityProviderConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config#delete EksIdentityProviderConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EksIdentityProviderConfigOidcOutputReference <a name="EksIdentityProviderConfigOidcOutputReference" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsClaim">reset_groups_claim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsPrefix">reset_groups_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetRequiredClaims">reset_required_claims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernameClaim">reset_username_claim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernamePrefix">reset_username_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_groups_claim` <a name="reset_groups_claim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsClaim"></a>

```python
def reset_groups_claim() -> None
```

##### `reset_groups_prefix` <a name="reset_groups_prefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsPrefix"></a>

```python
def reset_groups_prefix() -> None
```

##### `reset_required_claims` <a name="reset_required_claims" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetRequiredClaims"></a>

```python
def reset_required_claims() -> None
```

##### `reset_username_claim` <a name="reset_username_claim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernameClaim"></a>

```python
def reset_username_claim() -> None
```

##### `reset_username_prefix` <a name="reset_username_prefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernamePrefix"></a>

```python
def reset_username_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaimInput">groups_claim_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefixInput">groups_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigNameInput">identity_provider_config_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrlInput">issuer_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaimsInput">required_claims_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaimInput">username_claim_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefixInput">username_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaim">groups_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefix">groups_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigName">identity_provider_config_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrl">issuer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaims">required_claims</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaim">username_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefix">username_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `groups_claim_input`<sup>Optional</sup> <a name="groups_claim_input" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaimInput"></a>

```python
groups_claim_input: str
```

- *Type:* str

---

##### `groups_prefix_input`<sup>Optional</sup> <a name="groups_prefix_input" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefixInput"></a>

```python
groups_prefix_input: str
```

- *Type:* str

---

##### `identity_provider_config_name_input`<sup>Optional</sup> <a name="identity_provider_config_name_input" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigNameInput"></a>

```python
identity_provider_config_name_input: str
```

- *Type:* str

---

##### `issuer_url_input`<sup>Optional</sup> <a name="issuer_url_input" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrlInput"></a>

```python
issuer_url_input: str
```

- *Type:* str

---

##### `required_claims_input`<sup>Optional</sup> <a name="required_claims_input" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaimsInput"></a>

```python
required_claims_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `username_claim_input`<sup>Optional</sup> <a name="username_claim_input" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaimInput"></a>

```python
username_claim_input: str
```

- *Type:* str

---

##### `username_prefix_input`<sup>Optional</sup> <a name="username_prefix_input" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefixInput"></a>

```python
username_prefix_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `groups_claim`<sup>Required</sup> <a name="groups_claim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaim"></a>

```python
groups_claim: str
```

- *Type:* str

---

##### `groups_prefix`<sup>Required</sup> <a name="groups_prefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefix"></a>

```python
groups_prefix: str
```

- *Type:* str

---

##### `identity_provider_config_name`<sup>Required</sup> <a name="identity_provider_config_name" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigName"></a>

```python
identity_provider_config_name: str
```

- *Type:* str

---

##### `issuer_url`<sup>Required</sup> <a name="issuer_url" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrl"></a>

```python
issuer_url: str
```

- *Type:* str

---

##### `required_claims`<sup>Required</sup> <a name="required_claims" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaims"></a>

```python
required_claims: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `username_claim`<sup>Required</sup> <a name="username_claim" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaim"></a>

```python
username_claim: str
```

- *Type:* str

---

##### `username_prefix`<sup>Required</sup> <a name="username_prefix" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefix"></a>

```python
username_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.internalValue"></a>

```python
internal_value: EksIdentityProviderConfigOidc
```

- *Type:* <a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

---


### EksIdentityProviderConfigTimeoutsOutputReference <a name="EksIdentityProviderConfigTimeoutsOutputReference" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import eks_identity_provider_config

eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[EksIdentityProviderConfigTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a>, cdktf.IResolvable]

---



