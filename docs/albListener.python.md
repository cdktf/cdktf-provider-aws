# `albListener` Submodule <a name="`albListener` Submodule" id="@cdktf/provider-aws.albListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlbListener <a name="AlbListener" id="@cdktf/provider-aws.albListener.AlbListener"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener aws_alb_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListener.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListener(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_action: typing.Union[IResolvable, typing.List[AlbListenerDefaultAction]],
  load_balancer_arn: str,
  alpn_policy: str = None,
  certificate_arn: str = None,
  id: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  ssl_policy: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: AlbListenerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.defaultAction">default_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>]]</code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#load_balancer_arn AlbListener#load_balancer_arn}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.alpnPolicy">alpn_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#alpn_policy AlbListener#alpn_policy}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#certificate_arn AlbListener#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#id AlbListener#id}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#port AlbListener#port}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#protocol AlbListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.sslPolicy">ssl_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#ssl_policy AlbListener#ssl_policy}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#tags AlbListener#tags}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#tags_all AlbListener#tags_all}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.defaultAction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>]]

default_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#default_action AlbListener#default_action}

---

##### `load_balancer_arn`<sup>Required</sup> <a name="load_balancer_arn" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.loadBalancerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#load_balancer_arn AlbListener#load_balancer_arn}.

---

##### `alpn_policy`<sup>Optional</sup> <a name="alpn_policy" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.alpnPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#alpn_policy AlbListener#alpn_policy}.

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#certificate_arn AlbListener#certificate_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#id AlbListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#port AlbListener#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#protocol AlbListener#protocol}.

---

##### `ssl_policy`<sup>Optional</sup> <a name="ssl_policy" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.sslPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#ssl_policy AlbListener#ssl_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#tags AlbListener#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#tags_all AlbListener#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#timeouts AlbListener#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.putDefaultAction">put_default_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetAlpnPolicy">reset_alpn_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetSslPolicy">reset_ssl_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albListener.AlbListener.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.albListener.AlbListener.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.albListener.AlbListener.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListener.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.albListener.AlbListener.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.albListener.AlbListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.albListener.AlbListener.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.albListener.AlbListener.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.albListener.AlbListener.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albListener.AlbListener.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_default_action` <a name="put_default_action" id="@cdktf/provider-aws.albListener.AlbListener.putDefaultAction"></a>

```python
def put_default_action(
  value: typing.Union[IResolvable, typing.List[AlbListenerDefaultAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListener.putDefaultAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.albListener.AlbListener.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.albListener.AlbListener.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#read AlbListener#read}.

---

##### `reset_alpn_policy` <a name="reset_alpn_policy" id="@cdktf/provider-aws.albListener.AlbListener.resetAlpnPolicy"></a>

```python
def reset_alpn_policy() -> None
```

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktf/provider-aws.albListener.AlbListener.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.albListener.AlbListener.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.albListener.AlbListener.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.albListener.AlbListener.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_ssl_policy` <a name="reset_ssl_policy" id="@cdktf/provider-aws.albListener.AlbListener.resetSslPolicy"></a>

```python
def reset_ssl_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.albListener.AlbListener.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.albListener.AlbListener.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.albListener.AlbListener.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.albListener.AlbListener.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListener.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albListener.AlbListener.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.albListener.AlbListener.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListener.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albListener.AlbListener.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.albListener.AlbListener.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListener.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albListener.AlbListener.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.defaultAction">default_action</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList">AlbListenerDefaultActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference">AlbListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.alpnPolicyInput">alpn_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.defaultActionInput">default_action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.loadBalancerArnInput">load_balancer_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.sslPolicyInput">ssl_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.alpnPolicy">alpn_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.sslPolicy">ssl_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.albListener.AlbListener.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.albListener.AlbListener.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListener.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.albListener.AlbListener.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.albListener.AlbListener.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.albListener.AlbListener.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.albListener.AlbListener.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.albListener.AlbListener.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.albListener.AlbListener.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.albListener.AlbListener.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.albListener.AlbListener.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.albListener.AlbListener.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albListener.AlbListener.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.albListener.AlbListener.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.albListener.AlbListener.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-aws.albListener.AlbListener.property.defaultAction"></a>

```python
default_action: AlbListenerDefaultActionList
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList">AlbListenerDefaultActionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.albListener.AlbListener.property.timeouts"></a>

```python
timeouts: AlbListenerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference">AlbListenerTimeoutsOutputReference</a>

---

##### `alpn_policy_input`<sup>Optional</sup> <a name="alpn_policy_input" id="@cdktf/provider-aws.albListener.AlbListener.property.alpnPolicyInput"></a>

```python
alpn_policy_input: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktf/provider-aws.albListener.AlbListener.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktf/provider-aws.albListener.AlbListener.property.defaultActionInput"></a>

```python
default_action_input: typing.Union[IResolvable, typing.List[AlbListenerDefaultAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.albListener.AlbListener.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_arn_input`<sup>Optional</sup> <a name="load_balancer_arn_input" id="@cdktf/provider-aws.albListener.AlbListener.property.loadBalancerArnInput"></a>

```python
load_balancer_arn_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.albListener.AlbListener.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.albListener.AlbListener.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `ssl_policy_input`<sup>Optional</sup> <a name="ssl_policy_input" id="@cdktf/provider-aws.albListener.AlbListener.property.sslPolicyInput"></a>

```python
ssl_policy_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.albListener.AlbListener.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.albListener.AlbListener.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.albListener.AlbListener.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[AlbListenerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a>, cdktf.IResolvable]

---

##### `alpn_policy`<sup>Required</sup> <a name="alpn_policy" id="@cdktf/provider-aws.albListener.AlbListener.property.alpnPolicy"></a>

```python
alpn_policy: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktf/provider-aws.albListener.AlbListener.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albListener.AlbListener.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer_arn`<sup>Required</sup> <a name="load_balancer_arn" id="@cdktf/provider-aws.albListener.AlbListener.property.loadBalancerArn"></a>

```python
load_balancer_arn: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.albListener.AlbListener.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.albListener.AlbListener.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `ssl_policy`<sup>Required</sup> <a name="ssl_policy" id="@cdktf/provider-aws.albListener.AlbListener.property.sslPolicy"></a>

```python
ssl_policy: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.albListener.AlbListener.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.albListener.AlbListener.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.albListener.AlbListener.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlbListenerConfig <a name="AlbListenerConfig" id="@cdktf/provider-aws.albListener.AlbListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_action: typing.Union[IResolvable, typing.List[AlbListenerDefaultAction]],
  load_balancer_arn: str,
  alpn_policy: str = None,
  certificate_arn: str = None,
  id: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  ssl_policy: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: AlbListenerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.defaultAction">default_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>]]</code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.loadBalancerArn">load_balancer_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#load_balancer_arn AlbListener#load_balancer_arn}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.alpnPolicy">alpn_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#alpn_policy AlbListener#alpn_policy}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#certificate_arn AlbListener#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#id AlbListener#id}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#port AlbListener#port}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#protocol AlbListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.sslPolicy">ssl_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#ssl_policy AlbListener#ssl_policy}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#tags AlbListener#tags}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#tags_all AlbListener#tags_all}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.defaultAction"></a>

```python
default_action: typing.Union[IResolvable, typing.List[AlbListenerDefaultAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>]]

default_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#default_action AlbListener#default_action}

---

##### `load_balancer_arn`<sup>Required</sup> <a name="load_balancer_arn" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.loadBalancerArn"></a>

```python
load_balancer_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#load_balancer_arn AlbListener#load_balancer_arn}.

---

##### `alpn_policy`<sup>Optional</sup> <a name="alpn_policy" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.alpnPolicy"></a>

```python
alpn_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#alpn_policy AlbListener#alpn_policy}.

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#certificate_arn AlbListener#certificate_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#id AlbListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#port AlbListener#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#protocol AlbListener#protocol}.

---

##### `ssl_policy`<sup>Optional</sup> <a name="ssl_policy" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.sslPolicy"></a>

```python
ssl_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#ssl_policy AlbListener#ssl_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#tags AlbListener#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#tags_all AlbListener#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.timeouts"></a>

```python
timeouts: AlbListenerTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#timeouts AlbListener#timeouts}

---

### AlbListenerDefaultAction <a name="AlbListenerDefaultAction" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultAction(
  type: str,
  authenticate_cognito: AlbListenerDefaultActionAuthenticateCognito = None,
  authenticate_oidc: AlbListenerDefaultActionAuthenticateOidc = None,
  fixed_response: AlbListenerDefaultActionFixedResponse = None,
  forward: AlbListenerDefaultActionForward = None,
  order: typing.Union[int, float] = None,
  redirect: AlbListenerDefaultActionRedirect = None,
  target_group_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#type AlbListener#type}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.authenticateCognito">authenticate_cognito</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a></code> | authenticate_cognito block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.authenticateOidc">authenticate_oidc</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a></code> | authenticate_oidc block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.fixedResponse">fixed_response</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a></code> | fixed_response block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a></code> | forward block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#order AlbListener#order}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#target_group_arn AlbListener#target_group_arn}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#type AlbListener#type}.

---

##### `authenticate_cognito`<sup>Optional</sup> <a name="authenticate_cognito" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.authenticateCognito"></a>

```python
authenticate_cognito: AlbListenerDefaultActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a>

authenticate_cognito block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authenticate_cognito AlbListener#authenticate_cognito}

---

##### `authenticate_oidc`<sup>Optional</sup> <a name="authenticate_oidc" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.authenticateOidc"></a>

```python
authenticate_oidc: AlbListenerDefaultActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a>

authenticate_oidc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authenticate_oidc AlbListener#authenticate_oidc}

---

##### `fixed_response`<sup>Optional</sup> <a name="fixed_response" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.fixedResponse"></a>

```python
fixed_response: AlbListenerDefaultActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a>

fixed_response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#fixed_response AlbListener#fixed_response}

---

##### `forward`<sup>Optional</sup> <a name="forward" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.forward"></a>

```python
forward: AlbListenerDefaultActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a>

forward block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#forward AlbListener#forward}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#order AlbListener#order}.

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.redirect"></a>

```python
redirect: AlbListenerDefaultActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#redirect AlbListener#redirect}

---

##### `target_group_arn`<sup>Optional</sup> <a name="target_group_arn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#target_group_arn AlbListener#target_group_arn}.

---

### AlbListenerDefaultActionAuthenticateCognito <a name="AlbListenerDefaultActionAuthenticateCognito" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionAuthenticateCognito(
  user_pool_arn: str,
  user_pool_client_id: str,
  user_pool_domain: str,
  authentication_request_extra_params: typing.Mapping[str] = None,
  on_unauthenticated_request: str = None,
  scope: str = None,
  session_cookie_name: str = None,
  session_timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolArn">user_pool_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_pool_arn AlbListener#user_pool_arn}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolClientId">user_pool_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_pool_client_id AlbListener#user_pool_client_id}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolDomain">user_pool_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_pool_domain AlbListener#user_pool_domain}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authentication_request_extra_params AlbListener#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#on_unauthenticated_request AlbListener#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#scope AlbListener#scope}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_cookie_name AlbListener#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_timeout AlbListener#session_timeout}. |

---

##### `user_pool_arn`<sup>Required</sup> <a name="user_pool_arn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolArn"></a>

```python
user_pool_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_pool_arn AlbListener#user_pool_arn}.

---

##### `user_pool_client_id`<sup>Required</sup> <a name="user_pool_client_id" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolClientId"></a>

```python
user_pool_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_pool_client_id AlbListener#user_pool_client_id}.

---

##### `user_pool_domain`<sup>Required</sup> <a name="user_pool_domain" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolDomain"></a>

```python
user_pool_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_pool_domain AlbListener#user_pool_domain}.

---

##### `authentication_request_extra_params`<sup>Optional</sup> <a name="authentication_request_extra_params" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authentication_request_extra_params AlbListener#authentication_request_extra_params}.

---

##### `on_unauthenticated_request`<sup>Optional</sup> <a name="on_unauthenticated_request" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#on_unauthenticated_request AlbListener#on_unauthenticated_request}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#scope AlbListener#scope}.

---

##### `session_cookie_name`<sup>Optional</sup> <a name="session_cookie_name" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_cookie_name AlbListener#session_cookie_name}.

---

##### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_timeout AlbListener#session_timeout}.

---

### AlbListenerDefaultActionAuthenticateOidc <a name="AlbListenerDefaultActionAuthenticateOidc" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionAuthenticateOidc(
  authorization_endpoint: str,
  client_id: str,
  client_secret: str,
  issuer: str,
  token_endpoint: str,
  user_info_endpoint: str,
  authentication_request_extra_params: typing.Mapping[str] = None,
  on_unauthenticated_request: str = None,
  scope: str = None,
  session_cookie_name: str = None,
  session_timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authorization_endpoint AlbListener#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#client_id AlbListener#client_id}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#client_secret AlbListener#client_secret}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#issuer AlbListener#issuer}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#token_endpoint AlbListener#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_info_endpoint AlbListener#user_info_endpoint}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authentication_request_extra_params AlbListener#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#on_unauthenticated_request AlbListener#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#scope AlbListener#scope}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_cookie_name AlbListener#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_timeout AlbListener#session_timeout}. |

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authorization_endpoint AlbListener#authorization_endpoint}.

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#client_id AlbListener#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#client_secret AlbListener#client_secret}.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#issuer AlbListener#issuer}.

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#token_endpoint AlbListener#token_endpoint}.

---

##### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_info_endpoint AlbListener#user_info_endpoint}.

---

##### `authentication_request_extra_params`<sup>Optional</sup> <a name="authentication_request_extra_params" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authentication_request_extra_params AlbListener#authentication_request_extra_params}.

---

##### `on_unauthenticated_request`<sup>Optional</sup> <a name="on_unauthenticated_request" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#on_unauthenticated_request AlbListener#on_unauthenticated_request}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#scope AlbListener#scope}.

---

##### `session_cookie_name`<sup>Optional</sup> <a name="session_cookie_name" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_cookie_name AlbListener#session_cookie_name}.

---

##### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_timeout AlbListener#session_timeout}.

---

### AlbListenerDefaultActionFixedResponse <a name="AlbListenerDefaultActionFixedResponse" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionFixedResponse(
  content_type: str,
  message_body: str = None,
  status_code: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#content_type AlbListener#content_type}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.messageBody">message_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#message_body AlbListener#message_body}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.statusCode">status_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#status_code AlbListener#status_code}. |

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#content_type AlbListener#content_type}.

---

##### `message_body`<sup>Optional</sup> <a name="message_body" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.messageBody"></a>

```python
message_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#message_body AlbListener#message_body}.

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#status_code AlbListener#status_code}.

---

### AlbListenerDefaultActionForward <a name="AlbListenerDefaultActionForward" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionForward(
  target_group: typing.Union[IResolvable, typing.List[AlbListenerDefaultActionForwardTargetGroup]],
  stickiness: AlbListenerDefaultActionForwardStickiness = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward.property.targetGroup">target_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>]]</code> | target_group block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a></code> | stickiness block. |

---

##### `target_group`<sup>Required</sup> <a name="target_group" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward.property.targetGroup"></a>

```python
target_group: typing.Union[IResolvable, typing.List[AlbListenerDefaultActionForwardTargetGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>]]

target_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#target_group AlbListener#target_group}

---

##### `stickiness`<sup>Optional</sup> <a name="stickiness" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward.property.stickiness"></a>

```python
stickiness: AlbListenerDefaultActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#stickiness AlbListener#stickiness}

---

### AlbListenerDefaultActionForwardStickiness <a name="AlbListenerDefaultActionForwardStickiness" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionForwardStickiness(
  duration: typing.Union[int, float],
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#duration AlbListener#duration}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#enabled AlbListener#enabled}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#duration AlbListener#duration}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#enabled AlbListener#enabled}.

---

### AlbListenerDefaultActionForwardTargetGroup <a name="AlbListenerDefaultActionForwardTargetGroup" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionForwardTargetGroup(
  arn: str,
  weight: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#arn AlbListener#arn}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#weight AlbListener#weight}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#arn AlbListener#arn}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#weight AlbListener#weight}.

---

### AlbListenerDefaultActionRedirect <a name="AlbListenerDefaultActionRedirect" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionRedirect(
  status_code: str,
  host: str = None,
  path: str = None,
  port: str = None,
  protocol: str = None,
  query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.statusCode">status_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#status_code AlbListener#status_code}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#host AlbListener#host}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#path AlbListener#path}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.port">port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#port AlbListener#port}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#protocol AlbListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#query AlbListener#query}. |

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#status_code AlbListener#status_code}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#host AlbListener#host}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#path AlbListener#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.port"></a>

```python
port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#port AlbListener#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#protocol AlbListener#protocol}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#query AlbListener#query}.

---

### AlbListenerTimeouts <a name="AlbListenerTimeouts" id="@cdktf/provider-aws.albListener.AlbListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#read AlbListener#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.albListener.AlbListenerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#read AlbListener#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlbListenerDefaultActionAuthenticateCognitoOutputReference <a name="AlbListenerDefaultActionAuthenticateCognitoOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams">reset_authentication_request_extra_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest">reset_on_unauthenticated_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionCookieName">reset_session_cookie_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionTimeout">reset_session_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_request_extra_params` <a name="reset_authentication_request_extra_params" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams"></a>

```python
def reset_authentication_request_extra_params() -> None
```

##### `reset_on_unauthenticated_request` <a name="reset_on_unauthenticated_request" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest"></a>

```python
def reset_on_unauthenticated_request() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_session_cookie_name` <a name="reset_session_cookie_name" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionCookieName"></a>

```python
def reset_session_cookie_name() -> None
```

##### `reset_session_timeout` <a name="reset_session_timeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionTimeout"></a>

```python
def reset_session_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput">authentication_request_extra_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput">on_unauthenticated_request_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput">session_cookie_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput">session_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArnInput">user_pool_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput">user_pool_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomainInput">user_pool_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArn">user_pool_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientId">user_pool_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomain">user_pool_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_request_extra_params_input`<sup>Optional</sup> <a name="authentication_request_extra_params_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput"></a>

```python
authentication_request_extra_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `on_unauthenticated_request_input`<sup>Optional</sup> <a name="on_unauthenticated_request_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput"></a>

```python
on_unauthenticated_request_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `session_cookie_name_input`<sup>Optional</sup> <a name="session_cookie_name_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput"></a>

```python
session_cookie_name_input: str
```

- *Type:* str

---

##### `session_timeout_input`<sup>Optional</sup> <a name="session_timeout_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput"></a>

```python
session_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_pool_arn_input`<sup>Optional</sup> <a name="user_pool_arn_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArnInput"></a>

```python
user_pool_arn_input: str
```

- *Type:* str

---

##### `user_pool_client_id_input`<sup>Optional</sup> <a name="user_pool_client_id_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput"></a>

```python
user_pool_client_id_input: str
```

- *Type:* str

---

##### `user_pool_domain_input`<sup>Optional</sup> <a name="user_pool_domain_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomainInput"></a>

```python
user_pool_domain_input: str
```

- *Type:* str

---

##### `authentication_request_extra_params`<sup>Required</sup> <a name="authentication_request_extra_params" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `on_unauthenticated_request`<sup>Required</sup> <a name="on_unauthenticated_request" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `session_cookie_name`<sup>Required</sup> <a name="session_cookie_name" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_pool_arn`<sup>Required</sup> <a name="user_pool_arn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArn"></a>

```python
user_pool_arn: str
```

- *Type:* str

---

##### `user_pool_client_id`<sup>Required</sup> <a name="user_pool_client_id" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientId"></a>

```python
user_pool_client_id: str
```

- *Type:* str

---

##### `user_pool_domain`<sup>Required</sup> <a name="user_pool_domain" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomain"></a>

```python
user_pool_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.internalValue"></a>

```python
internal_value: AlbListenerDefaultActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a>

---


### AlbListenerDefaultActionAuthenticateOidcOutputReference <a name="AlbListenerDefaultActionAuthenticateOidcOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams">reset_authentication_request_extra_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest">reset_on_unauthenticated_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionCookieName">reset_session_cookie_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionTimeout">reset_session_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_request_extra_params` <a name="reset_authentication_request_extra_params" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams"></a>

```python
def reset_authentication_request_extra_params() -> None
```

##### `reset_on_unauthenticated_request` <a name="reset_on_unauthenticated_request" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest"></a>

```python
def reset_on_unauthenticated_request() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_session_cookie_name` <a name="reset_session_cookie_name" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionCookieName"></a>

```python
def reset_session_cookie_name() -> None
```

##### `reset_session_timeout` <a name="reset_session_timeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionTimeout"></a>

```python
def reset_session_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput">authentication_request_extra_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpointInput">authorization_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput">on_unauthenticated_request_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieNameInput">session_cookie_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeoutInput">session_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpointInput">user_info_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_request_extra_params_input`<sup>Optional</sup> <a name="authentication_request_extra_params_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput"></a>

```python
authentication_request_extra_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authorization_endpoint_input`<sup>Optional</sup> <a name="authorization_endpoint_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpointInput"></a>

```python
authorization_endpoint_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `on_unauthenticated_request_input`<sup>Optional</sup> <a name="on_unauthenticated_request_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput"></a>

```python
on_unauthenticated_request_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `session_cookie_name_input`<sup>Optional</sup> <a name="session_cookie_name_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieNameInput"></a>

```python
session_cookie_name_input: str
```

- *Type:* str

---

##### `session_timeout_input`<sup>Optional</sup> <a name="session_timeout_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeoutInput"></a>

```python
session_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `user_info_endpoint_input`<sup>Optional</sup> <a name="user_info_endpoint_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpointInput"></a>

```python
user_info_endpoint_input: str
```

- *Type:* str

---

##### `authentication_request_extra_params`<sup>Required</sup> <a name="authentication_request_extra_params" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `on_unauthenticated_request`<sup>Required</sup> <a name="on_unauthenticated_request" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `session_cookie_name`<sup>Required</sup> <a name="session_cookie_name" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.internalValue"></a>

```python
internal_value: AlbListenerDefaultActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a>

---


### AlbListenerDefaultActionFixedResponseOutputReference <a name="AlbListenerDefaultActionFixedResponseOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionFixedResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resetMessageBody">reset_message_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message_body` <a name="reset_message_body" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resetMessageBody"></a>

```python
def reset_message_body() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.messageBodyInput">message_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.messageBody">message_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `message_body_input`<sup>Optional</sup> <a name="message_body_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.messageBodyInput"></a>

```python
message_body_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput"></a>

```python
status_code_input: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `message_body`<sup>Required</sup> <a name="message_body" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.messageBody"></a>

```python
message_body: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.internalValue"></a>

```python
internal_value: AlbListenerDefaultActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a>

---


### AlbListenerDefaultActionForwardOutputReference <a name="AlbListenerDefaultActionForwardOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionForwardOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putStickiness">put_stickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putTargetGroup">put_target_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.resetStickiness">reset_stickiness</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_stickiness` <a name="put_stickiness" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putStickiness"></a>

```python
def put_stickiness(
  duration: typing.Union[int, float],
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putStickiness.parameter.duration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#duration AlbListener#duration}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putStickiness.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#enabled AlbListener#enabled}.

---

##### `put_target_group` <a name="put_target_group" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putTargetGroup"></a>

```python
def put_target_group(
  value: typing.Union[IResolvable, typing.List[AlbListenerDefaultActionForwardTargetGroup]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>]]

---

##### `reset_stickiness` <a name="reset_stickiness" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.resetStickiness"></a>

```python
def reset_stickiness() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference">AlbListenerDefaultActionForwardStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.targetGroup">target_group</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList">AlbListenerDefaultActionForwardTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.stickinessInput">stickiness_input</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.targetGroupInput">target_group_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stickiness`<sup>Required</sup> <a name="stickiness" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.stickiness"></a>

```python
stickiness: AlbListenerDefaultActionForwardStickinessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference">AlbListenerDefaultActionForwardStickinessOutputReference</a>

---

##### `target_group`<sup>Required</sup> <a name="target_group" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.targetGroup"></a>

```python
target_group: AlbListenerDefaultActionForwardTargetGroupList
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList">AlbListenerDefaultActionForwardTargetGroupList</a>

---

##### `stickiness_input`<sup>Optional</sup> <a name="stickiness_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.stickinessInput"></a>

```python
stickiness_input: AlbListenerDefaultActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a>

---

##### `target_group_input`<sup>Optional</sup> <a name="target_group_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.targetGroupInput"></a>

```python
target_group_input: typing.Union[IResolvable, typing.List[AlbListenerDefaultActionForwardTargetGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.internalValue"></a>

```python
internal_value: AlbListenerDefaultActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a>

---


### AlbListenerDefaultActionForwardStickinessOutputReference <a name="AlbListenerDefaultActionForwardStickinessOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionForwardStickinessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.durationInput">duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.durationInput"></a>

```python
duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.internalValue"></a>

```python
internal_value: AlbListenerDefaultActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a>

---


### AlbListenerDefaultActionForwardTargetGroupList <a name="AlbListenerDefaultActionForwardTargetGroupList" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionForwardTargetGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlbListenerDefaultActionForwardTargetGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AlbListenerDefaultActionForwardTargetGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>]]

---


### AlbListenerDefaultActionForwardTargetGroupOutputReference <a name="AlbListenerDefaultActionForwardTargetGroupOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.resetWeight">reset_weight</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_weight` <a name="reset_weight" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.resetWeight"></a>

```python
def reset_weight() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AlbListenerDefaultActionForwardTargetGroup, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>, cdktf.IResolvable]

---


### AlbListenerDefaultActionList <a name="AlbListenerDefaultActionList" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlbListenerDefaultActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AlbListenerDefaultAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>]]

---


### AlbListenerDefaultActionOutputReference <a name="AlbListenerDefaultActionOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateCognito">put_authenticate_cognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc">put_authenticate_oidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putFixedResponse">put_fixed_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putForward">put_forward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putRedirect">put_redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetAuthenticateCognito">reset_authenticate_cognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetAuthenticateOidc">reset_authenticate_oidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetFixedResponse">reset_fixed_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetForward">reset_forward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetRedirect">reset_redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetTargetGroupArn">reset_target_group_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authenticate_cognito` <a name="put_authenticate_cognito" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateCognito"></a>

```python
def put_authenticate_cognito(
  user_pool_arn: str,
  user_pool_client_id: str,
  user_pool_domain: str,
  authentication_request_extra_params: typing.Mapping[str] = None,
  on_unauthenticated_request: str = None,
  scope: str = None,
  session_cookie_name: str = None,
  session_timeout: typing.Union[int, float] = None
) -> None
```

###### `user_pool_arn`<sup>Required</sup> <a name="user_pool_arn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateCognito.parameter.userPoolArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_pool_arn AlbListener#user_pool_arn}.

---

###### `user_pool_client_id`<sup>Required</sup> <a name="user_pool_client_id" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateCognito.parameter.userPoolClientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_pool_client_id AlbListener#user_pool_client_id}.

---

###### `user_pool_domain`<sup>Required</sup> <a name="user_pool_domain" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateCognito.parameter.userPoolDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_pool_domain AlbListener#user_pool_domain}.

---

###### `authentication_request_extra_params`<sup>Optional</sup> <a name="authentication_request_extra_params" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateCognito.parameter.authenticationRequestExtraParams"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authentication_request_extra_params AlbListener#authentication_request_extra_params}.

---

###### `on_unauthenticated_request`<sup>Optional</sup> <a name="on_unauthenticated_request" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateCognito.parameter.onUnauthenticatedRequest"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#on_unauthenticated_request AlbListener#on_unauthenticated_request}.

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateCognito.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#scope AlbListener#scope}.

---

###### `session_cookie_name`<sup>Optional</sup> <a name="session_cookie_name" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateCognito.parameter.sessionCookieName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_cookie_name AlbListener#session_cookie_name}.

---

###### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateCognito.parameter.sessionTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_timeout AlbListener#session_timeout}.

---

##### `put_authenticate_oidc` <a name="put_authenticate_oidc" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc"></a>

```python
def put_authenticate_oidc(
  authorization_endpoint: str,
  client_id: str,
  client_secret: str,
  issuer: str,
  token_endpoint: str,
  user_info_endpoint: str,
  authentication_request_extra_params: typing.Mapping[str] = None,
  on_unauthenticated_request: str = None,
  scope: str = None,
  session_cookie_name: str = None,
  session_timeout: typing.Union[int, float] = None
) -> None
```

###### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc.parameter.authorizationEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authorization_endpoint AlbListener#authorization_endpoint}.

---

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#client_id AlbListener#client_id}.

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#client_secret AlbListener#client_secret}.

---

###### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#issuer AlbListener#issuer}.

---

###### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc.parameter.tokenEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#token_endpoint AlbListener#token_endpoint}.

---

###### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc.parameter.userInfoEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_info_endpoint AlbListener#user_info_endpoint}.

---

###### `authentication_request_extra_params`<sup>Optional</sup> <a name="authentication_request_extra_params" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc.parameter.authenticationRequestExtraParams"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authentication_request_extra_params AlbListener#authentication_request_extra_params}.

---

###### `on_unauthenticated_request`<sup>Optional</sup> <a name="on_unauthenticated_request" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc.parameter.onUnauthenticatedRequest"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#on_unauthenticated_request AlbListener#on_unauthenticated_request}.

---

###### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#scope AlbListener#scope}.

---

###### `session_cookie_name`<sup>Optional</sup> <a name="session_cookie_name" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc.parameter.sessionCookieName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_cookie_name AlbListener#session_cookie_name}.

---

###### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc.parameter.sessionTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_timeout AlbListener#session_timeout}.

---

##### `put_fixed_response` <a name="put_fixed_response" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putFixedResponse"></a>

```python
def put_fixed_response(
  content_type: str,
  message_body: str = None,
  status_code: str = None
) -> None
```

###### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putFixedResponse.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#content_type AlbListener#content_type}.

---

###### `message_body`<sup>Optional</sup> <a name="message_body" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putFixedResponse.parameter.messageBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#message_body AlbListener#message_body}.

---

###### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putFixedResponse.parameter.statusCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#status_code AlbListener#status_code}.

---

##### `put_forward` <a name="put_forward" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putForward"></a>

```python
def put_forward(
  target_group: typing.Union[IResolvable, typing.List[AlbListenerDefaultActionForwardTargetGroup]],
  stickiness: AlbListenerDefaultActionForwardStickiness = None
) -> None
```

###### `target_group`<sup>Required</sup> <a name="target_group" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putForward.parameter.targetGroup"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>]]

target_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#target_group AlbListener#target_group}

---

###### `stickiness`<sup>Optional</sup> <a name="stickiness" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putForward.parameter.stickiness"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#stickiness AlbListener#stickiness}

---

##### `put_redirect` <a name="put_redirect" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putRedirect"></a>

```python
def put_redirect(
  status_code: str,
  host: str = None,
  path: str = None,
  port: str = None,
  protocol: str = None,
  query: str = None
) -> None
```

###### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putRedirect.parameter.statusCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#status_code AlbListener#status_code}.

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putRedirect.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#host AlbListener#host}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putRedirect.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#path AlbListener#path}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putRedirect.parameter.port"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#port AlbListener#port}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putRedirect.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#protocol AlbListener#protocol}.

---

###### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putRedirect.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#query AlbListener#query}.

---

##### `reset_authenticate_cognito` <a name="reset_authenticate_cognito" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetAuthenticateCognito"></a>

```python
def reset_authenticate_cognito() -> None
```

##### `reset_authenticate_oidc` <a name="reset_authenticate_oidc" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetAuthenticateOidc"></a>

```python
def reset_authenticate_oidc() -> None
```

##### `reset_fixed_response` <a name="reset_fixed_response" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetFixedResponse"></a>

```python
def reset_fixed_response() -> None
```

##### `reset_forward` <a name="reset_forward" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetForward"></a>

```python
def reset_forward() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_redirect` <a name="reset_redirect" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetRedirect"></a>

```python
def reset_redirect() -> None
```

##### `reset_target_group_arn` <a name="reset_target_group_arn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetTargetGroupArn"></a>

```python
def reset_target_group_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateCognito">authenticate_cognito</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference">AlbListenerDefaultActionAuthenticateCognitoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateOidc">authenticate_oidc</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference">AlbListenerDefaultActionAuthenticateOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fixedResponse">fixed_response</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference">AlbListenerDefaultActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference">AlbListenerDefaultActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference">AlbListenerDefaultActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateCognitoInput">authenticate_cognito_input</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateOidcInput">authenticate_oidc_input</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fixedResponseInput">fixed_response_input</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.forwardInput">forward_input</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.redirectInput">redirect_input</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.targetGroupArnInput">target_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authenticate_cognito`<sup>Required</sup> <a name="authenticate_cognito" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateCognito"></a>

```python
authenticate_cognito: AlbListenerDefaultActionAuthenticateCognitoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference">AlbListenerDefaultActionAuthenticateCognitoOutputReference</a>

---

##### `authenticate_oidc`<sup>Required</sup> <a name="authenticate_oidc" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateOidc"></a>

```python
authenticate_oidc: AlbListenerDefaultActionAuthenticateOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference">AlbListenerDefaultActionAuthenticateOidcOutputReference</a>

---

##### `fixed_response`<sup>Required</sup> <a name="fixed_response" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fixedResponse"></a>

```python
fixed_response: AlbListenerDefaultActionFixedResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference">AlbListenerDefaultActionFixedResponseOutputReference</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.forward"></a>

```python
forward: AlbListenerDefaultActionForwardOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference">AlbListenerDefaultActionForwardOutputReference</a>

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.redirect"></a>

```python
redirect: AlbListenerDefaultActionRedirectOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference">AlbListenerDefaultActionRedirectOutputReference</a>

---

##### `authenticate_cognito_input`<sup>Optional</sup> <a name="authenticate_cognito_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateCognitoInput"></a>

```python
authenticate_cognito_input: AlbListenerDefaultActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a>

---

##### `authenticate_oidc_input`<sup>Optional</sup> <a name="authenticate_oidc_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateOidcInput"></a>

```python
authenticate_oidc_input: AlbListenerDefaultActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a>

---

##### `fixed_response_input`<sup>Optional</sup> <a name="fixed_response_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fixedResponseInput"></a>

```python
fixed_response_input: AlbListenerDefaultActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a>

---

##### `forward_input`<sup>Optional</sup> <a name="forward_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.forwardInput"></a>

```python
forward_input: AlbListenerDefaultActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a>

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redirect_input`<sup>Optional</sup> <a name="redirect_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.redirectInput"></a>

```python
redirect_input: AlbListenerDefaultActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a>

---

##### `target_group_arn_input`<sup>Optional</sup> <a name="target_group_arn_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.targetGroupArnInput"></a>

```python
target_group_arn_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AlbListenerDefaultAction, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>, cdktf.IResolvable]

---


### AlbListenerDefaultActionRedirectOutputReference <a name="AlbListenerDefaultActionRedirectOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerDefaultActionRedirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetQuery">reset_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.statusCodeInput"></a>

```python
status_code_input: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.internalValue"></a>

```python
internal_value: AlbListenerDefaultActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a>

---


### AlbListenerTimeoutsOutputReference <a name="AlbListenerTimeoutsOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_listener

albListener.AlbListenerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AlbListenerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a>, cdktf.IResolvable]

---



