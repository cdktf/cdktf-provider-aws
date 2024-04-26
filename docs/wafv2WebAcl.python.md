# `wafv2WebAcl` Submodule <a name="`wafv2WebAcl` Submodule" id="@cdktf/provider-aws.wafv2WebAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Wafv2WebAcl <a name="Wafv2WebAcl" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl aws_wafv2_web_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAcl(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_action: Wafv2WebAclDefaultAction,
  name: str,
  scope: str,
  visibility_config: Wafv2WebAclVisibilityConfig,
  association_config: Wafv2WebAclAssociationConfig = None,
  captcha_config: Wafv2WebAclCaptchaConfig = None,
  challenge_config: Wafv2WebAclChallengeConfig = None,
  custom_response_body: typing.Union[IResolvable, typing.List[Wafv2WebAclCustomResponseBody]] = None,
  description: str = None,
  id: str = None,
  rule: typing.Union[IResolvable, typing.List[Wafv2WebAclRule]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  token_domains: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.defaultAction">default_action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a></code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#scope Wafv2WebAcl#scope}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.visibilityConfig">visibility_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a></code> | visibility_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.associationConfig">association_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a></code> | association_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.captchaConfig">captcha_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a></code> | captcha_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.challengeConfig">challenge_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a></code> | challenge_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.customResponseBody">custom_response_body</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>]]</code> | custom_response_body block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#description Wafv2WebAcl#description}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#id Wafv2WebAcl#id}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#tags Wafv2WebAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#tags_all Wafv2WebAcl#tags_all}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.tokenDomains">token_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#token_domains Wafv2WebAcl#token_domains}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.defaultAction"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a>

default_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#default_action Wafv2WebAcl#default_action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#scope Wafv2WebAcl#scope}.

---

##### `visibility_config`<sup>Required</sup> <a name="visibility_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.visibilityConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a>

visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#visibility_config Wafv2WebAcl#visibility_config}

---

##### `association_config`<sup>Optional</sup> <a name="association_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.associationConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a>

association_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#association_config Wafv2WebAcl#association_config}

---

##### `captcha_config`<sup>Optional</sup> <a name="captcha_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.captchaConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a>

captcha_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#captcha_config Wafv2WebAcl#captcha_config}

---

##### `challenge_config`<sup>Optional</sup> <a name="challenge_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.challengeConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a>

challenge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#challenge_config Wafv2WebAcl#challenge_config}

---

##### `custom_response_body`<sup>Optional</sup> <a name="custom_response_body" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.customResponseBody"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>]]

custom_response_body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_response_body Wafv2WebAcl#custom_response_body}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#description Wafv2WebAcl#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#id Wafv2WebAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#rule Wafv2WebAcl#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#tags Wafv2WebAcl#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#tags_all Wafv2WebAcl#tags_all}.

---

##### `token_domains`<sup>Optional</sup> <a name="token_domains" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.tokenDomains"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#token_domains Wafv2WebAcl#token_domains}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putAssociationConfig">put_association_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCaptchaConfig">put_captcha_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putChallengeConfig">put_challenge_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCustomResponseBody">put_custom_response_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putDefaultAction">put_default_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putVisibilityConfig">put_visibility_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetAssociationConfig">reset_association_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetCaptchaConfig">reset_captcha_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetChallengeConfig">reset_challenge_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetCustomResponseBody">reset_custom_response_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetRule">reset_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTokenDomains">reset_token_domains</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_association_config` <a name="put_association_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putAssociationConfig"></a>

```python
def put_association_config(
  request_body: typing.Union[IResolvable, typing.List[Wafv2WebAclAssociationConfigRequestBody]] = None
) -> None
```

###### `request_body`<sup>Optional</sup> <a name="request_body" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putAssociationConfig.parameter.requestBody"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>]]

request_body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#request_body Wafv2WebAcl#request_body}

---

##### `put_captcha_config` <a name="put_captcha_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCaptchaConfig"></a>

```python
def put_captcha_config(
  immunity_time_property: Wafv2WebAclCaptchaConfigImmunityTimeProperty = None
) -> None
```

###### `immunity_time_property`<sup>Optional</sup> <a name="immunity_time_property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCaptchaConfig.parameter.immunityTimeProperty"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}

---

##### `put_challenge_config` <a name="put_challenge_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putChallengeConfig"></a>

```python
def put_challenge_config(
  immunity_time_property: Wafv2WebAclChallengeConfigImmunityTimeProperty = None
) -> None
```

###### `immunity_time_property`<sup>Optional</sup> <a name="immunity_time_property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putChallengeConfig.parameter.immunityTimeProperty"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}

---

##### `put_custom_response_body` <a name="put_custom_response_body" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCustomResponseBody"></a>

```python
def put_custom_response_body(
  value: typing.Union[IResolvable, typing.List[Wafv2WebAclCustomResponseBody]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCustomResponseBody.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>]]

---

##### `put_default_action` <a name="put_default_action" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putDefaultAction"></a>

```python
def put_default_action(
  allow: Wafv2WebAclDefaultActionAllow = None,
  block: Wafv2WebAclDefaultActionBlock = None
) -> None
```

###### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putDefaultAction.parameter.allow"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#allow Wafv2WebAcl#allow}

---

###### `block`<sup>Optional</sup> <a name="block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putDefaultAction.parameter.block"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a>

block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#block Wafv2WebAcl#block}

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[Wafv2WebAclRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>]]

---

##### `put_visibility_config` <a name="put_visibility_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putVisibilityConfig"></a>

```python
def put_visibility_config(
  cloudwatch_metrics_enabled: typing.Union[bool, IResolvable],
  metric_name: str,
  sampled_requests_enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `cloudwatch_metrics_enabled`<sup>Required</sup> <a name="cloudwatch_metrics_enabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putVisibilityConfig.parameter.cloudwatchMetricsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}.

---

###### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putVisibilityConfig.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}.

---

###### `sampled_requests_enabled`<sup>Required</sup> <a name="sampled_requests_enabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putVisibilityConfig.parameter.sampledRequestsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}.

---

##### `reset_association_config` <a name="reset_association_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetAssociationConfig"></a>

```python
def reset_association_config() -> None
```

##### `reset_captcha_config` <a name="reset_captcha_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetCaptchaConfig"></a>

```python
def reset_captcha_config() -> None
```

##### `reset_challenge_config` <a name="reset_challenge_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetChallengeConfig"></a>

```python
def reset_challenge_config() -> None
```

##### `reset_custom_response_body` <a name="reset_custom_response_body" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetCustomResponseBody"></a>

```python
def reset_custom_response_body() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetRule"></a>

```python
def reset_rule() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_token_domains` <a name="reset_token_domains" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTokenDomains"></a>

```python
def reset_token_domains() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Wafv2WebAcl resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAcl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAcl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAcl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAcl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Wafv2WebAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Wafv2WebAcl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Wafv2WebAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Wafv2WebAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.applicationIntegrationUrl">application_integration_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.associationConfig">association_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference">Wafv2WebAclAssociationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.captchaConfig">captcha_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference">Wafv2WebAclCaptchaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.challengeConfig">challenge_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference">Wafv2WebAclChallengeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.customResponseBody">custom_response_body</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList">Wafv2WebAclCustomResponseBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.defaultAction">default_action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference">Wafv2WebAclDefaultActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.lockToken">lock_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList">Wafv2WebAclRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.visibilityConfig">visibility_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference">Wafv2WebAclVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.associationConfigInput">association_config_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.captchaConfigInput">captcha_config_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.challengeConfigInput">challenge_config_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.customResponseBodyInput">custom_response_body_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.defaultActionInput">default_action_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tokenDomainsInput">token_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.visibilityConfigInput">visibility_config_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tokenDomains">token_domains</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_integration_url`<sup>Required</sup> <a name="application_integration_url" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.applicationIntegrationUrl"></a>

```python
application_integration_url: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `association_config`<sup>Required</sup> <a name="association_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.associationConfig"></a>

```python
association_config: Wafv2WebAclAssociationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference">Wafv2WebAclAssociationConfigOutputReference</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `captcha_config`<sup>Required</sup> <a name="captcha_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.captchaConfig"></a>

```python
captcha_config: Wafv2WebAclCaptchaConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference">Wafv2WebAclCaptchaConfigOutputReference</a>

---

##### `challenge_config`<sup>Required</sup> <a name="challenge_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.challengeConfig"></a>

```python
challenge_config: Wafv2WebAclChallengeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference">Wafv2WebAclChallengeConfigOutputReference</a>

---

##### `custom_response_body`<sup>Required</sup> <a name="custom_response_body" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.customResponseBody"></a>

```python
custom_response_body: Wafv2WebAclCustomResponseBodyList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList">Wafv2WebAclCustomResponseBodyList</a>

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.defaultAction"></a>

```python
default_action: Wafv2WebAclDefaultActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference">Wafv2WebAclDefaultActionOutputReference</a>

---

##### `lock_token`<sup>Required</sup> <a name="lock_token" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.lockToken"></a>

```python
lock_token: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.rule"></a>

```python
rule: Wafv2WebAclRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList">Wafv2WebAclRuleList</a>

---

##### `visibility_config`<sup>Required</sup> <a name="visibility_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.visibilityConfig"></a>

```python
visibility_config: Wafv2WebAclVisibilityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference">Wafv2WebAclVisibilityConfigOutputReference</a>

---

##### `association_config_input`<sup>Optional</sup> <a name="association_config_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.associationConfigInput"></a>

```python
association_config_input: Wafv2WebAclAssociationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a>

---

##### `captcha_config_input`<sup>Optional</sup> <a name="captcha_config_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.captchaConfigInput"></a>

```python
captcha_config_input: Wafv2WebAclCaptchaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a>

---

##### `challenge_config_input`<sup>Optional</sup> <a name="challenge_config_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.challengeConfigInput"></a>

```python
challenge_config_input: Wafv2WebAclChallengeConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a>

---

##### `custom_response_body_input`<sup>Optional</sup> <a name="custom_response_body_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.customResponseBodyInput"></a>

```python
custom_response_body_input: typing.Union[IResolvable, typing.List[Wafv2WebAclCustomResponseBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>]]

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.defaultActionInput"></a>

```python
default_action_input: Wafv2WebAclDefaultAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[Wafv2WebAclRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>]]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `token_domains_input`<sup>Optional</sup> <a name="token_domains_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tokenDomainsInput"></a>

```python
token_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `visibility_config_input`<sup>Optional</sup> <a name="visibility_config_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.visibilityConfigInput"></a>

```python
visibility_config_input: Wafv2WebAclVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `token_domains`<sup>Required</sup> <a name="token_domains" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tokenDomains"></a>

```python
token_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Wafv2WebAclAssociationConfig <a name="Wafv2WebAclAssociationConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclAssociationConfig(
  request_body: typing.Union[IResolvable, typing.List[Wafv2WebAclAssociationConfigRequestBody]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig.property.requestBody">request_body</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>]]</code> | request_body block. |

---

##### `request_body`<sup>Optional</sup> <a name="request_body" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig.property.requestBody"></a>

```python
request_body: typing.Union[IResolvable, typing.List[Wafv2WebAclAssociationConfigRequestBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>]]

request_body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#request_body Wafv2WebAcl#request_body}

---

### Wafv2WebAclAssociationConfigRequestBody <a name="Wafv2WebAclAssociationConfigRequestBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody(
  cloudfront: typing.Union[IResolvable, typing.List[Wafv2WebAclAssociationConfigRequestBodyCloudfront]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.cloudfront">cloudfront</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>]]</code> | cloudfront block. |

---

##### `cloudfront`<sup>Optional</sup> <a name="cloudfront" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.cloudfront"></a>

```python
cloudfront: typing.Union[IResolvable, typing.List[Wafv2WebAclAssociationConfigRequestBodyCloudfront]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>]]

cloudfront block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#cloudfront Wafv2WebAcl#cloudfront}

---

### Wafv2WebAclAssociationConfigRequestBodyCloudfront <a name="Wafv2WebAclAssociationConfigRequestBodyCloudfront" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront(
  default_size_inspection_limit: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront.property.defaultSizeInspectionLimit">default_size_inspection_limit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}. |

---

##### `default_size_inspection_limit`<sup>Required</sup> <a name="default_size_inspection_limit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront.property.defaultSizeInspectionLimit"></a>

```python
default_size_inspection_limit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}.

---

### Wafv2WebAclCaptchaConfig <a name="Wafv2WebAclCaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclCaptchaConfig(
  immunity_time_property: Wafv2WebAclCaptchaConfigImmunityTimeProperty = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig.property.immunityTimeProperty">immunity_time_property</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a></code> | immunity_time_property block. |

---

##### `immunity_time_property`<sup>Optional</sup> <a name="immunity_time_property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig.property.immunityTimeProperty"></a>

```python
immunity_time_property: Wafv2WebAclCaptchaConfigImmunityTimeProperty
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}

---

### Wafv2WebAclCaptchaConfigImmunityTimeProperty <a name="Wafv2WebAclCaptchaConfigImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty(
  immunity_time: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty.property.immunityTime">immunity_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}. |

---

##### `immunity_time`<sup>Optional</sup> <a name="immunity_time" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty.property.immunityTime"></a>

```python
immunity_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}.

---

### Wafv2WebAclChallengeConfig <a name="Wafv2WebAclChallengeConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclChallengeConfig(
  immunity_time_property: Wafv2WebAclChallengeConfigImmunityTimeProperty = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig.property.immunityTimeProperty">immunity_time_property</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a></code> | immunity_time_property block. |

---

##### `immunity_time_property`<sup>Optional</sup> <a name="immunity_time_property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig.property.immunityTimeProperty"></a>

```python
immunity_time_property: Wafv2WebAclChallengeConfigImmunityTimeProperty
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}

---

### Wafv2WebAclChallengeConfigImmunityTimeProperty <a name="Wafv2WebAclChallengeConfigImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty(
  immunity_time: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty.property.immunityTime">immunity_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}. |

---

##### `immunity_time`<sup>Optional</sup> <a name="immunity_time" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty.property.immunityTime"></a>

```python
immunity_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}.

---

### Wafv2WebAclConfig <a name="Wafv2WebAclConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_action: Wafv2WebAclDefaultAction,
  name: str,
  scope: str,
  visibility_config: Wafv2WebAclVisibilityConfig,
  association_config: Wafv2WebAclAssociationConfig = None,
  captcha_config: Wafv2WebAclCaptchaConfig = None,
  challenge_config: Wafv2WebAclChallengeConfig = None,
  custom_response_body: typing.Union[IResolvable, typing.List[Wafv2WebAclCustomResponseBody]] = None,
  description: str = None,
  id: str = None,
  rule: typing.Union[IResolvable, typing.List[Wafv2WebAclRule]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  token_domains: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.defaultAction">default_action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a></code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#scope Wafv2WebAcl#scope}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.visibilityConfig">visibility_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a></code> | visibility_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.associationConfig">association_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a></code> | association_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.captchaConfig">captcha_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a></code> | captcha_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.challengeConfig">challenge_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a></code> | challenge_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.customResponseBody">custom_response_body</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>]]</code> | custom_response_body block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#description Wafv2WebAcl#description}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#id Wafv2WebAcl#id}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#tags Wafv2WebAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#tags_all Wafv2WebAcl#tags_all}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tokenDomains">token_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#token_domains Wafv2WebAcl#token_domains}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.defaultAction"></a>

```python
default_action: Wafv2WebAclDefaultAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a>

default_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#default_action Wafv2WebAcl#default_action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#scope Wafv2WebAcl#scope}.

---

##### `visibility_config`<sup>Required</sup> <a name="visibility_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.visibilityConfig"></a>

```python
visibility_config: Wafv2WebAclVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a>

visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#visibility_config Wafv2WebAcl#visibility_config}

---

##### `association_config`<sup>Optional</sup> <a name="association_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.associationConfig"></a>

```python
association_config: Wafv2WebAclAssociationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a>

association_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#association_config Wafv2WebAcl#association_config}

---

##### `captcha_config`<sup>Optional</sup> <a name="captcha_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.captchaConfig"></a>

```python
captcha_config: Wafv2WebAclCaptchaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a>

captcha_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#captcha_config Wafv2WebAcl#captcha_config}

---

##### `challenge_config`<sup>Optional</sup> <a name="challenge_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.challengeConfig"></a>

```python
challenge_config: Wafv2WebAclChallengeConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a>

challenge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#challenge_config Wafv2WebAcl#challenge_config}

---

##### `custom_response_body`<sup>Optional</sup> <a name="custom_response_body" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.customResponseBody"></a>

```python
custom_response_body: typing.Union[IResolvable, typing.List[Wafv2WebAclCustomResponseBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>]]

custom_response_body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_response_body Wafv2WebAcl#custom_response_body}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#description Wafv2WebAcl#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#id Wafv2WebAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[Wafv2WebAclRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#rule Wafv2WebAcl#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#tags Wafv2WebAcl#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#tags_all Wafv2WebAcl#tags_all}.

---

##### `token_domains`<sup>Optional</sup> <a name="token_domains" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tokenDomains"></a>

```python
token_domains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#token_domains Wafv2WebAcl#token_domains}.

---

### Wafv2WebAclCustomResponseBody <a name="Wafv2WebAclCustomResponseBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclCustomResponseBody(
  content: str,
  content_type: str,
  key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#content Wafv2WebAcl#content}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#content_type Wafv2WebAcl#content_type}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#key Wafv2WebAcl#key}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#content Wafv2WebAcl#content}.

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#content_type Wafv2WebAcl#content_type}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#key Wafv2WebAcl#key}.

---

### Wafv2WebAclDefaultAction <a name="Wafv2WebAclDefaultAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclDefaultAction(
  allow: Wafv2WebAclDefaultActionAllow = None,
  block: Wafv2WebAclDefaultActionBlock = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction.property.block">block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a></code> | block block. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction.property.allow"></a>

```python
allow: Wafv2WebAclDefaultActionAllow
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#allow Wafv2WebAcl#allow}

---

##### `block`<sup>Optional</sup> <a name="block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction.property.block"></a>

```python
block: Wafv2WebAclDefaultActionBlock
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a>

block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#block Wafv2WebAcl#block}

---

### Wafv2WebAclDefaultActionAllow <a name="Wafv2WebAclDefaultActionAllow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclDefaultActionAllow(
  custom_request_handling: Wafv2WebAclDefaultActionAllowCustomRequestHandling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2WebAclDefaultActionAllowCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

### Wafv2WebAclDefaultActionAllowCustomRequestHandling <a name="Wafv2WebAclDefaultActionAllowCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling.property.insertHeader">insert_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>]]</code> | insert_header block. |

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling.property.insertHeader"></a>

```python
insert_header: typing.Union[IResolvable, typing.List[Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

### Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader <a name="Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclDefaultActionBlock <a name="Wafv2WebAclDefaultActionBlock" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclDefaultActionBlock(
  custom_response: Wafv2WebAclDefaultActionBlockCustomResponse = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock.property.customResponse">custom_response</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a></code> | custom_response block. |

---

##### `custom_response`<sup>Optional</sup> <a name="custom_response" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock.property.customResponse"></a>

```python
custom_response: Wafv2WebAclDefaultActionBlockCustomResponse
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a>

custom_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_response Wafv2WebAcl#custom_response}

---

### Wafv2WebAclDefaultActionBlockCustomResponse <a name="Wafv2WebAclDefaultActionBlockCustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse(
  response_code: typing.Union[int, float],
  custom_response_body_key: str = None,
  response_header: typing.Union[IResolvable, typing.List[Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.responseCode">response_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.customResponseBodyKey">custom_response_body_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.responseHeader">response_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>]]</code> | response_header block. |

---

##### `response_code`<sup>Required</sup> <a name="response_code" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.responseCode"></a>

```python
response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}.

---

##### `custom_response_body_key`<sup>Optional</sup> <a name="custom_response_body_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.customResponseBodyKey"></a>

```python
custom_response_body_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}.

---

##### `response_header`<sup>Optional</sup> <a name="response_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.responseHeader"></a>

```python
response_header: typing.Union[IResolvable, typing.List[Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>]]

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#response_header Wafv2WebAcl#response_header}

---

### Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader <a name="Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRule <a name="Wafv2WebAclRule" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRule(
  name: str,
  priority: typing.Union[int, float],
  visibility_config: Wafv2WebAclRuleVisibilityConfig,
  action: Wafv2WebAclRuleAction = None,
  captcha_config: Wafv2WebAclRuleCaptchaConfig = None,
  override_action: Wafv2WebAclRuleOverrideAction = None,
  rule_label: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleRuleLabel]] = None,
  statement: typing.Any = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#priority Wafv2WebAcl#priority}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.visibilityConfig">visibility_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a></code> | visibility_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.captchaConfig">captcha_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a></code> | captcha_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.overrideAction">override_action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a></code> | override_action block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.ruleLabel">rule_label</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>]]</code> | rule_label block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.statement">statement</a></code> | <code>typing.Any</code> | statement block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#priority Wafv2WebAcl#priority}.

---

##### `visibility_config`<sup>Required</sup> <a name="visibility_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.visibilityConfig"></a>

```python
visibility_config: Wafv2WebAclRuleVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a>

visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#visibility_config Wafv2WebAcl#visibility_config}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.action"></a>

```python
action: Wafv2WebAclRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#action Wafv2WebAcl#action}

---

##### `captcha_config`<sup>Optional</sup> <a name="captcha_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.captchaConfig"></a>

```python
captcha_config: Wafv2WebAclRuleCaptchaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a>

captcha_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#captcha_config Wafv2WebAcl#captcha_config}

---

##### `override_action`<sup>Optional</sup> <a name="override_action" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.overrideAction"></a>

```python
override_action: Wafv2WebAclRuleOverrideAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a>

override_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#override_action Wafv2WebAcl#override_action}

---

##### `rule_label`<sup>Optional</sup> <a name="rule_label" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.ruleLabel"></a>

```python
rule_label: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleRuleLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>]]

rule_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#rule_label Wafv2WebAcl#rule_label}

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.statement"></a>

```python
statement: typing.Any
```

- *Type:* typing.Any

statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#statement Wafv2WebAcl#statement}

---

### Wafv2WebAclRuleAction <a name="Wafv2WebAclRuleAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleAction(
  allow: Wafv2WebAclRuleActionAllow = None,
  block: Wafv2WebAclRuleActionBlock = None,
  captcha: Wafv2WebAclRuleActionCaptcha = None,
  challenge: Wafv2WebAclRuleActionChallenge = None,
  count: Wafv2WebAclRuleActionCount = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.block">block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a></code> | block block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.captcha">captcha</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a></code> | captcha block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.challenge">challenge</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a></code> | challenge block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.count">count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a></code> | count block. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.allow"></a>

```python
allow: Wafv2WebAclRuleActionAllow
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#allow Wafv2WebAcl#allow}

---

##### `block`<sup>Optional</sup> <a name="block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.block"></a>

```python
block: Wafv2WebAclRuleActionBlock
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a>

block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#block Wafv2WebAcl#block}

---

##### `captcha`<sup>Optional</sup> <a name="captcha" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.captcha"></a>

```python
captcha: Wafv2WebAclRuleActionCaptcha
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a>

captcha block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#captcha Wafv2WebAcl#captcha}

---

##### `challenge`<sup>Optional</sup> <a name="challenge" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.challenge"></a>

```python
challenge: Wafv2WebAclRuleActionChallenge
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a>

challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#challenge Wafv2WebAcl#challenge}

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.count"></a>

```python
count: Wafv2WebAclRuleActionCount
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a>

count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#count Wafv2WebAcl#count}

---

### Wafv2WebAclRuleActionAllow <a name="Wafv2WebAclRuleActionAllow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionAllow(
  custom_request_handling: Wafv2WebAclRuleActionAllowCustomRequestHandling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2WebAclRuleActionAllowCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

### Wafv2WebAclRuleActionAllowCustomRequestHandling <a name="Wafv2WebAclRuleActionAllowCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling.property.insertHeader">insert_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>]]</code> | insert_header block. |

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling.property.insertHeader"></a>

```python
insert_header: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

### Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader <a name="Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRuleActionBlock <a name="Wafv2WebAclRuleActionBlock" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionBlock(
  custom_response: Wafv2WebAclRuleActionBlockCustomResponse = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock.property.customResponse">custom_response</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a></code> | custom_response block. |

---

##### `custom_response`<sup>Optional</sup> <a name="custom_response" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock.property.customResponse"></a>

```python
custom_response: Wafv2WebAclRuleActionBlockCustomResponse
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a>

custom_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_response Wafv2WebAcl#custom_response}

---

### Wafv2WebAclRuleActionBlockCustomResponse <a name="Wafv2WebAclRuleActionBlockCustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse(
  response_code: typing.Union[int, float],
  custom_response_body_key: str = None,
  response_header: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionBlockCustomResponseResponseHeader]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.responseCode">response_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.customResponseBodyKey">custom_response_body_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.responseHeader">response_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>]]</code> | response_header block. |

---

##### `response_code`<sup>Required</sup> <a name="response_code" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.responseCode"></a>

```python
response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}.

---

##### `custom_response_body_key`<sup>Optional</sup> <a name="custom_response_body_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.customResponseBodyKey"></a>

```python
custom_response_body_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}.

---

##### `response_header`<sup>Optional</sup> <a name="response_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.responseHeader"></a>

```python
response_header: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionBlockCustomResponseResponseHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>]]

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#response_header Wafv2WebAcl#response_header}

---

### Wafv2WebAclRuleActionBlockCustomResponseResponseHeader <a name="Wafv2WebAclRuleActionBlockCustomResponseResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRuleActionCaptcha <a name="Wafv2WebAclRuleActionCaptcha" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionCaptcha(
  custom_request_handling: Wafv2WebAclRuleActionCaptchaCustomRequestHandling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2WebAclRuleActionCaptchaCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

### Wafv2WebAclRuleActionCaptchaCustomRequestHandling <a name="Wafv2WebAclRuleActionCaptchaCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling.property.insertHeader">insert_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]]</code> | insert_header block. |

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling.property.insertHeader"></a>

```python
insert_header: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

### Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader <a name="Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRuleActionChallenge <a name="Wafv2WebAclRuleActionChallenge" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionChallenge(
  custom_request_handling: Wafv2WebAclRuleActionChallengeCustomRequestHandling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2WebAclRuleActionChallengeCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

### Wafv2WebAclRuleActionChallengeCustomRequestHandling <a name="Wafv2WebAclRuleActionChallengeCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling.property.insertHeader">insert_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>]]</code> | insert_header block. |

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling.property.insertHeader"></a>

```python
insert_header: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

### Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader <a name="Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRuleActionCount <a name="Wafv2WebAclRuleActionCount" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionCount(
  custom_request_handling: Wafv2WebAclRuleActionCountCustomRequestHandling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2WebAclRuleActionCountCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

### Wafv2WebAclRuleActionCountCustomRequestHandling <a name="Wafv2WebAclRuleActionCountCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling.property.insertHeader">insert_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>]]</code> | insert_header block. |

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling.property.insertHeader"></a>

```python
insert_header: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

### Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader <a name="Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRuleCaptchaConfig <a name="Wafv2WebAclRuleCaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig(
  immunity_time_property: Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig.property.immunityTimeProperty">immunity_time_property</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a></code> | immunity_time_property block. |

---

##### `immunity_time_property`<sup>Optional</sup> <a name="immunity_time_property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig.property.immunityTimeProperty"></a>

```python
immunity_time_property: Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}

---

### Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty <a name="Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty(
  immunity_time: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty.property.immunityTime">immunity_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}. |

---

##### `immunity_time`<sup>Optional</sup> <a name="immunity_time" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty.property.immunityTime"></a>

```python
immunity_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}.

---

### Wafv2WebAclRuleOverrideAction <a name="Wafv2WebAclRuleOverrideAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleOverrideAction(
  count: Wafv2WebAclRuleOverrideActionCount = None,
  none: Wafv2WebAclRuleOverrideActionNone = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction.property.count">count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a></code> | count block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction.property.none">none</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a></code> | none block. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction.property.count"></a>

```python
count: Wafv2WebAclRuleOverrideActionCount
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a>

count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#count Wafv2WebAcl#count}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction.property.none"></a>

```python
none: Wafv2WebAclRuleOverrideActionNone
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a>

none block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#none Wafv2WebAcl#none}

---

### Wafv2WebAclRuleOverrideActionCount <a name="Wafv2WebAclRuleOverrideActionCount" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount()
```


### Wafv2WebAclRuleOverrideActionNone <a name="Wafv2WebAclRuleOverrideActionNone" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone()
```


### Wafv2WebAclRuleRuleLabel <a name="Wafv2WebAclRuleRuleLabel" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleRuleLabel(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

### Wafv2WebAclRuleVisibilityConfig <a name="Wafv2WebAclRuleVisibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig(
  cloudwatch_metrics_enabled: typing.Union[bool, IResolvable],
  metric_name: str,
  sampled_requests_enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.cloudwatchMetricsEnabled">cloudwatch_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.sampledRequestsEnabled">sampled_requests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}. |

---

##### `cloudwatch_metrics_enabled`<sup>Required</sup> <a name="cloudwatch_metrics_enabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.cloudwatchMetricsEnabled"></a>

```python
cloudwatch_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}.

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}.

---

##### `sampled_requests_enabled`<sup>Required</sup> <a name="sampled_requests_enabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.sampledRequestsEnabled"></a>

```python
sampled_requests_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}.

---

### Wafv2WebAclVisibilityConfig <a name="Wafv2WebAclVisibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclVisibilityConfig(
  cloudwatch_metrics_enabled: typing.Union[bool, IResolvable],
  metric_name: str,
  sampled_requests_enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.cloudwatchMetricsEnabled">cloudwatch_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.sampledRequestsEnabled">sampled_requests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}. |

---

##### `cloudwatch_metrics_enabled`<sup>Required</sup> <a name="cloudwatch_metrics_enabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.cloudwatchMetricsEnabled"></a>

```python
cloudwatch_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}.

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}.

---

##### `sampled_requests_enabled`<sup>Required</sup> <a name="sampled_requests_enabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.sampledRequestsEnabled"></a>

```python
sampled_requests_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### Wafv2WebAclAssociationConfigOutputReference <a name="Wafv2WebAclAssociationConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.putRequestBody">put_request_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.resetRequestBody">reset_request_body</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_request_body` <a name="put_request_body" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.putRequestBody"></a>

```python
def put_request_body(
  value: typing.Union[IResolvable, typing.List[Wafv2WebAclAssociationConfigRequestBody]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.putRequestBody.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>]]

---

##### `reset_request_body` <a name="reset_request_body" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.resetRequestBody"></a>

```python
def reset_request_body() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.requestBody">request_body</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList">Wafv2WebAclAssociationConfigRequestBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.requestBodyInput">request_body_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `request_body`<sup>Required</sup> <a name="request_body" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.requestBody"></a>

```python
request_body: Wafv2WebAclAssociationConfigRequestBodyList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList">Wafv2WebAclAssociationConfigRequestBodyList</a>

---

##### `request_body_input`<sup>Optional</sup> <a name="request_body_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.requestBodyInput"></a>

```python
request_body_input: typing.Union[IResolvable, typing.List[Wafv2WebAclAssociationConfigRequestBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclAssociationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a>

---


### Wafv2WebAclAssociationConfigRequestBodyCloudfrontList <a name="Wafv2WebAclAssociationConfigRequestBodyCloudfrontList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2WebAclAssociationConfigRequestBodyCloudfront]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>]]

---


### Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference <a name="Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.defaultSizeInspectionLimitInput">default_size_inspection_limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.defaultSizeInspectionLimit">default_size_inspection_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_size_inspection_limit_input`<sup>Optional</sup> <a name="default_size_inspection_limit_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.defaultSizeInspectionLimitInput"></a>

```python
default_size_inspection_limit_input: str
```

- *Type:* str

---

##### `default_size_inspection_limit`<sup>Required</sup> <a name="default_size_inspection_limit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.defaultSizeInspectionLimit"></a>

```python
default_size_inspection_limit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2WebAclAssociationConfigRequestBodyCloudfront]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>]

---


### Wafv2WebAclAssociationConfigRequestBodyList <a name="Wafv2WebAclAssociationConfigRequestBodyList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2WebAclAssociationConfigRequestBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2WebAclAssociationConfigRequestBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>]]

---


### Wafv2WebAclAssociationConfigRequestBodyOutputReference <a name="Wafv2WebAclAssociationConfigRequestBodyOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putCloudfront">put_cloudfront</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetCloudfront">reset_cloudfront</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudfront` <a name="put_cloudfront" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putCloudfront"></a>

```python
def put_cloudfront(
  value: typing.Union[IResolvable, typing.List[Wafv2WebAclAssociationConfigRequestBodyCloudfront]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putCloudfront.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>]]

---

##### `reset_cloudfront` <a name="reset_cloudfront" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetCloudfront"></a>

```python
def reset_cloudfront() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cloudfront">cloudfront</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList">Wafv2WebAclAssociationConfigRequestBodyCloudfrontList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cloudfrontInput">cloudfront_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudfront`<sup>Required</sup> <a name="cloudfront" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cloudfront"></a>

```python
cloudfront: Wafv2WebAclAssociationConfigRequestBodyCloudfrontList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontList">Wafv2WebAclAssociationConfigRequestBodyCloudfrontList</a>

---

##### `cloudfront_input`<sup>Optional</sup> <a name="cloudfront_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cloudfrontInput"></a>

```python
cloudfront_input: typing.Union[IResolvable, typing.List[Wafv2WebAclAssociationConfigRequestBodyCloudfront]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2WebAclAssociationConfigRequestBody]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>]

---


### Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference <a name="Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime">reset_immunity_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_immunity_time` <a name="reset_immunity_time" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime"></a>

```python
def reset_immunity_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput">immunity_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime">immunity_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `immunity_time_input`<sup>Optional</sup> <a name="immunity_time_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput"></a>

```python
immunity_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `immunity_time`<sup>Required</sup> <a name="immunity_time" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime"></a>

```python
immunity_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclCaptchaConfigImmunityTimeProperty
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a>

---


### Wafv2WebAclCaptchaConfigOutputReference <a name="Wafv2WebAclCaptchaConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.putImmunityTimeProperty">put_immunity_time_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.resetImmunityTimeProperty">reset_immunity_time_property</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_immunity_time_property` <a name="put_immunity_time_property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.putImmunityTimeProperty"></a>

```python
def put_immunity_time_property(
  immunity_time: typing.Union[int, float] = None
) -> None
```

###### `immunity_time`<sup>Optional</sup> <a name="immunity_time" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.putImmunityTimeProperty.parameter.immunityTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}.

---

##### `reset_immunity_time_property` <a name="reset_immunity_time_property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.resetImmunityTimeProperty"></a>

```python
def reset_immunity_time_property() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.immunityTimeProperty">immunity_time_property</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference">Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.immunityTimePropertyInput">immunity_time_property_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `immunity_time_property`<sup>Required</sup> <a name="immunity_time_property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.immunityTimeProperty"></a>

```python
immunity_time_property: Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference">Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference</a>

---

##### `immunity_time_property_input`<sup>Optional</sup> <a name="immunity_time_property_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.immunityTimePropertyInput"></a>

```python
immunity_time_property_input: Wafv2WebAclCaptchaConfigImmunityTimeProperty
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclCaptchaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a>

---


### Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference <a name="Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.resetImmunityTime">reset_immunity_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_immunity_time` <a name="reset_immunity_time" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.resetImmunityTime"></a>

```python
def reset_immunity_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.immunityTimeInput">immunity_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.immunityTime">immunity_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `immunity_time_input`<sup>Optional</sup> <a name="immunity_time_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.immunityTimeInput"></a>

```python
immunity_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `immunity_time`<sup>Required</sup> <a name="immunity_time" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.immunityTime"></a>

```python
immunity_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclChallengeConfigImmunityTimeProperty
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a>

---


### Wafv2WebAclChallengeConfigOutputReference <a name="Wafv2WebAclChallengeConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.putImmunityTimeProperty">put_immunity_time_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.resetImmunityTimeProperty">reset_immunity_time_property</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_immunity_time_property` <a name="put_immunity_time_property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.putImmunityTimeProperty"></a>

```python
def put_immunity_time_property(
  immunity_time: typing.Union[int, float] = None
) -> None
```

###### `immunity_time`<sup>Optional</sup> <a name="immunity_time" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.putImmunityTimeProperty.parameter.immunityTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}.

---

##### `reset_immunity_time_property` <a name="reset_immunity_time_property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.resetImmunityTimeProperty"></a>

```python
def reset_immunity_time_property() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.immunityTimeProperty">immunity_time_property</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference">Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.immunityTimePropertyInput">immunity_time_property_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `immunity_time_property`<sup>Required</sup> <a name="immunity_time_property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.immunityTimeProperty"></a>

```python
immunity_time_property: Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference">Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference</a>

---

##### `immunity_time_property_input`<sup>Optional</sup> <a name="immunity_time_property_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.immunityTimePropertyInput"></a>

```python
immunity_time_property_input: Wafv2WebAclChallengeConfigImmunityTimeProperty
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclChallengeConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a>

---


### Wafv2WebAclCustomResponseBodyList <a name="Wafv2WebAclCustomResponseBodyList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclCustomResponseBodyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2WebAclCustomResponseBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2WebAclCustomResponseBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>]]

---


### Wafv2WebAclCustomResponseBodyOutputReference <a name="Wafv2WebAclCustomResponseBodyOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2WebAclCustomResponseBody]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>]

---


### Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList <a name="Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>]]

---


### Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>]

---


### Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference <a name="Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.putInsertHeader">put_insert_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_insert_header` <a name="put_insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.putInsertHeader"></a>

```python
def put_insert_header(
  value: typing.Union[IResolvable, typing.List[Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.insertHeader">insert_header</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput">insert_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.insertHeader"></a>

```python
insert_header: Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList</a>

---

##### `insert_header_input`<sup>Optional</sup> <a name="insert_header_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```python
insert_header_input: typing.Union[IResolvable, typing.List[Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclDefaultActionAllowCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a>

---


### Wafv2WebAclDefaultActionAllowOutputReference <a name="Wafv2WebAclDefaultActionAllowOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.putCustomRequestHandling">put_custom_request_handling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.resetCustomRequestHandling">reset_custom_request_handling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_request_handling` <a name="put_custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.putCustomRequestHandling"></a>

```python
def put_custom_request_handling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader]]
) -> None
```

###### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.putCustomRequestHandling.parameter.insertHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

##### `reset_custom_request_handling` <a name="reset_custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.resetCustomRequestHandling"></a>

```python
def reset_custom_request_handling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference">Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.customRequestHandlingInput">custom_request_handling_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_request_handling`<sup>Required</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference">Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference</a>

---

##### `custom_request_handling_input`<sup>Optional</sup> <a name="custom_request_handling_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.customRequestHandlingInput"></a>

```python
custom_request_handling_input: Wafv2WebAclDefaultActionAllowCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclDefaultActionAllow
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a>

---


### Wafv2WebAclDefaultActionBlockCustomResponseOutputReference <a name="Wafv2WebAclDefaultActionBlockCustomResponseOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.putResponseHeader">put_response_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey">reset_custom_response_body_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resetResponseHeader">reset_response_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_response_header` <a name="put_response_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.putResponseHeader"></a>

```python
def put_response_header(
  value: typing.Union[IResolvable, typing.List[Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.putResponseHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>]]

---

##### `reset_custom_response_body_key` <a name="reset_custom_response_body_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey"></a>

```python
def reset_custom_response_body_key() -> None
```

##### `reset_response_header` <a name="reset_response_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resetResponseHeader"></a>

```python
def reset_response_header() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseHeader">response_header</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput">custom_response_body_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseCodeInput">response_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseHeaderInput">response_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.customResponseBodyKey">custom_response_body_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseCode">response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `response_header`<sup>Required</sup> <a name="response_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseHeader"></a>

```python
response_header: Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList</a>

---

##### `custom_response_body_key_input`<sup>Optional</sup> <a name="custom_response_body_key_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput"></a>

```python
custom_response_body_key_input: str
```

- *Type:* str

---

##### `response_code_input`<sup>Optional</sup> <a name="response_code_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseCodeInput"></a>

```python
response_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_header_input`<sup>Optional</sup> <a name="response_header_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseHeaderInput"></a>

```python
response_header_input: typing.Union[IResolvable, typing.List[Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>]]

---

##### `custom_response_body_key`<sup>Required</sup> <a name="custom_response_body_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.customResponseBodyKey"></a>

```python
custom_response_body_key: str
```

- *Type:* str

---

##### `response_code`<sup>Required</sup> <a name="response_code" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseCode"></a>

```python
response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclDefaultActionBlockCustomResponse
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a>

---


### Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList <a name="Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>]]

---


### Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference <a name="Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>]

---


### Wafv2WebAclDefaultActionBlockOutputReference <a name="Wafv2WebAclDefaultActionBlockOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.putCustomResponse">put_custom_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.resetCustomResponse">reset_custom_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_response` <a name="put_custom_response" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.putCustomResponse"></a>

```python
def put_custom_response(
  response_code: typing.Union[int, float],
  custom_response_body_key: str = None,
  response_header: typing.Union[IResolvable, typing.List[Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader]] = None
) -> None
```

###### `response_code`<sup>Required</sup> <a name="response_code" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.putCustomResponse.parameter.responseCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}.

---

###### `custom_response_body_key`<sup>Optional</sup> <a name="custom_response_body_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.putCustomResponse.parameter.customResponseBodyKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}.

---

###### `response_header`<sup>Optional</sup> <a name="response_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.putCustomResponse.parameter.responseHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>]]

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#response_header Wafv2WebAcl#response_header}

---

##### `reset_custom_response` <a name="reset_custom_response" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.resetCustomResponse"></a>

```python
def reset_custom_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.customResponse">custom_response</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference">Wafv2WebAclDefaultActionBlockCustomResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.customResponseInput">custom_response_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_response`<sup>Required</sup> <a name="custom_response" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.customResponse"></a>

```python
custom_response: Wafv2WebAclDefaultActionBlockCustomResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference">Wafv2WebAclDefaultActionBlockCustomResponseOutputReference</a>

---

##### `custom_response_input`<sup>Optional</sup> <a name="custom_response_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.customResponseInput"></a>

```python
custom_response_input: Wafv2WebAclDefaultActionBlockCustomResponse
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclDefaultActionBlock
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a>

---


### Wafv2WebAclDefaultActionOutputReference <a name="Wafv2WebAclDefaultActionOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putAllow">put_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putBlock">put_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resetAllow">reset_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resetBlock">reset_block</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allow` <a name="put_allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putAllow"></a>

```python
def put_allow(
  custom_request_handling: Wafv2WebAclDefaultActionAllowCustomRequestHandling = None
) -> None
```

###### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putAllow.parameter.customRequestHandling"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

##### `put_block` <a name="put_block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putBlock"></a>

```python
def put_block(
  custom_response: Wafv2WebAclDefaultActionBlockCustomResponse = None
) -> None
```

###### `custom_response`<sup>Optional</sup> <a name="custom_response" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putBlock.parameter.customResponse"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a>

custom_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_response Wafv2WebAcl#custom_response}

---

##### `reset_allow` <a name="reset_allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resetAllow"></a>

```python
def reset_allow() -> None
```

##### `reset_block` <a name="reset_block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resetBlock"></a>

```python
def reset_block() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference">Wafv2WebAclDefaultActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.block">block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference">Wafv2WebAclDefaultActionBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.allowInput">allow_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.blockInput">block_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.allow"></a>

```python
allow: Wafv2WebAclDefaultActionAllowOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference">Wafv2WebAclDefaultActionAllowOutputReference</a>

---

##### `block`<sup>Required</sup> <a name="block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.block"></a>

```python
block: Wafv2WebAclDefaultActionBlockOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference">Wafv2WebAclDefaultActionBlockOutputReference</a>

---

##### `allow_input`<sup>Optional</sup> <a name="allow_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.allowInput"></a>

```python
allow_input: Wafv2WebAclDefaultActionAllow
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a>

---

##### `block_input`<sup>Optional</sup> <a name="block_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.blockInput"></a>

```python
block_input: Wafv2WebAclDefaultActionBlock
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclDefaultAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a>

---


### Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList <a name="Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>]]

---


### Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>]

---


### Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference <a name="Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader">put_insert_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_insert_header` <a name="put_insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader"></a>

```python
def put_insert_header(
  value: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeader">insert_header</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput">insert_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeader"></a>

```python
insert_header: Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList</a>

---

##### `insert_header_input`<sup>Optional</sup> <a name="insert_header_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```python
insert_header_input: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleActionAllowCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a>

---


### Wafv2WebAclRuleActionAllowOutputReference <a name="Wafv2WebAclRuleActionAllowOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.putCustomRequestHandling">put_custom_request_handling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.resetCustomRequestHandling">reset_custom_request_handling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_request_handling` <a name="put_custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.putCustomRequestHandling"></a>

```python
def put_custom_request_handling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader]]
) -> None
```

###### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.putCustomRequestHandling.parameter.insertHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

##### `reset_custom_request_handling` <a name="reset_custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.resetCustomRequestHandling"></a>

```python
def reset_custom_request_handling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.customRequestHandlingInput">custom_request_handling_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_request_handling`<sup>Required</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference</a>

---

##### `custom_request_handling_input`<sup>Optional</sup> <a name="custom_request_handling_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.customRequestHandlingInput"></a>

```python
custom_request_handling_input: Wafv2WebAclRuleActionAllowCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleActionAllow
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a>

---


### Wafv2WebAclRuleActionBlockCustomResponseOutputReference <a name="Wafv2WebAclRuleActionBlockCustomResponseOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.putResponseHeader">put_response_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey">reset_custom_response_body_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resetResponseHeader">reset_response_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_response_header` <a name="put_response_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.putResponseHeader"></a>

```python
def put_response_header(
  value: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionBlockCustomResponseResponseHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.putResponseHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>]]

---

##### `reset_custom_response_body_key` <a name="reset_custom_response_body_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey"></a>

```python
def reset_custom_response_body_key() -> None
```

##### `reset_response_header` <a name="reset_response_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resetResponseHeader"></a>

```python
def reset_response_header() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseHeader">response_header</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList">Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput">custom_response_body_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseCodeInput">response_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseHeaderInput">response_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKey">custom_response_body_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseCode">response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `response_header`<sup>Required</sup> <a name="response_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseHeader"></a>

```python
response_header: Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList">Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList</a>

---

##### `custom_response_body_key_input`<sup>Optional</sup> <a name="custom_response_body_key_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput"></a>

```python
custom_response_body_key_input: str
```

- *Type:* str

---

##### `response_code_input`<sup>Optional</sup> <a name="response_code_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseCodeInput"></a>

```python
response_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_header_input`<sup>Optional</sup> <a name="response_header_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseHeaderInput"></a>

```python
response_header_input: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionBlockCustomResponseResponseHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>]]

---

##### `custom_response_body_key`<sup>Required</sup> <a name="custom_response_body_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKey"></a>

```python
custom_response_body_key: str
```

- *Type:* str

---

##### `response_code`<sup>Required</sup> <a name="response_code" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseCode"></a>

```python
response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleActionBlockCustomResponse
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a>

---


### Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList <a name="Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionBlockCustomResponseResponseHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>]]

---


### Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference <a name="Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2WebAclRuleActionBlockCustomResponseResponseHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>]

---


### Wafv2WebAclRuleActionBlockOutputReference <a name="Wafv2WebAclRuleActionBlockOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.putCustomResponse">put_custom_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.resetCustomResponse">reset_custom_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_response` <a name="put_custom_response" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.putCustomResponse"></a>

```python
def put_custom_response(
  response_code: typing.Union[int, float],
  custom_response_body_key: str = None,
  response_header: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionBlockCustomResponseResponseHeader]] = None
) -> None
```

###### `response_code`<sup>Required</sup> <a name="response_code" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.putCustomResponse.parameter.responseCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}.

---

###### `custom_response_body_key`<sup>Optional</sup> <a name="custom_response_body_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.putCustomResponse.parameter.customResponseBodyKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}.

---

###### `response_header`<sup>Optional</sup> <a name="response_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.putCustomResponse.parameter.responseHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>]]

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#response_header Wafv2WebAcl#response_header}

---

##### `reset_custom_response` <a name="reset_custom_response" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.resetCustomResponse"></a>

```python
def reset_custom_response() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.customResponse">custom_response</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference">Wafv2WebAclRuleActionBlockCustomResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.customResponseInput">custom_response_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_response`<sup>Required</sup> <a name="custom_response" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.customResponse"></a>

```python
custom_response: Wafv2WebAclRuleActionBlockCustomResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference">Wafv2WebAclRuleActionBlockCustomResponseOutputReference</a>

---

##### `custom_response_input`<sup>Optional</sup> <a name="custom_response_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.customResponseInput"></a>

```python
custom_response_input: Wafv2WebAclRuleActionBlockCustomResponse
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleActionBlock
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a>

---


### Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList <a name="Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]]

---


### Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]

---


### Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference <a name="Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader">put_insert_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_insert_header` <a name="put_insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader"></a>

```python
def put_insert_header(
  value: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader">insert_header</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeaderInput">insert_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader"></a>

```python
insert_header: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList</a>

---

##### `insert_header_input`<sup>Optional</sup> <a name="insert_header_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```python
insert_header_input: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleActionCaptchaCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a>

---


### Wafv2WebAclRuleActionCaptchaOutputReference <a name="Wafv2WebAclRuleActionCaptchaOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.putCustomRequestHandling">put_custom_request_handling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.resetCustomRequestHandling">reset_custom_request_handling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_request_handling` <a name="put_custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.putCustomRequestHandling"></a>

```python
def put_custom_request_handling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader]]
) -> None
```

###### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.putCustomRequestHandling.parameter.insertHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

##### `reset_custom_request_handling` <a name="reset_custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.resetCustomRequestHandling"></a>

```python
def reset_custom_request_handling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.customRequestHandlingInput">custom_request_handling_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_request_handling`<sup>Required</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference</a>

---

##### `custom_request_handling_input`<sup>Optional</sup> <a name="custom_request_handling_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.customRequestHandlingInput"></a>

```python
custom_request_handling_input: Wafv2WebAclRuleActionCaptchaCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleActionCaptcha
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a>

---


### Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList <a name="Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>]]

---


### Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>]

---


### Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference <a name="Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader">put_insert_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_insert_header` <a name="put_insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader"></a>

```python
def put_insert_header(
  value: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeader">insert_header</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeaderInput">insert_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeader"></a>

```python
insert_header: Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList</a>

---

##### `insert_header_input`<sup>Optional</sup> <a name="insert_header_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```python
insert_header_input: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleActionChallengeCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a>

---


### Wafv2WebAclRuleActionChallengeOutputReference <a name="Wafv2WebAclRuleActionChallengeOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.putCustomRequestHandling">put_custom_request_handling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.resetCustomRequestHandling">reset_custom_request_handling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_request_handling` <a name="put_custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.putCustomRequestHandling"></a>

```python
def put_custom_request_handling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader]]
) -> None
```

###### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.putCustomRequestHandling.parameter.insertHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

##### `reset_custom_request_handling` <a name="reset_custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.resetCustomRequestHandling"></a>

```python
def reset_custom_request_handling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.customRequestHandlingInput">custom_request_handling_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_request_handling`<sup>Required</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference</a>

---

##### `custom_request_handling_input`<sup>Optional</sup> <a name="custom_request_handling_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.customRequestHandlingInput"></a>

```python
custom_request_handling_input: Wafv2WebAclRuleActionChallengeCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleActionChallenge
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a>

---


### Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList <a name="Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>]]

---


### Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>]

---


### Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference <a name="Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader">put_insert_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_insert_header` <a name="put_insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader"></a>

```python
def put_insert_header(
  value: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.insertHeader">insert_header</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.insertHeaderInput">insert_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.insertHeader"></a>

```python
insert_header: Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList</a>

---

##### `insert_header_input`<sup>Optional</sup> <a name="insert_header_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```python
insert_header_input: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleActionCountCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a>

---


### Wafv2WebAclRuleActionCountOutputReference <a name="Wafv2WebAclRuleActionCountOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.putCustomRequestHandling">put_custom_request_handling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.resetCustomRequestHandling">reset_custom_request_handling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_request_handling` <a name="put_custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.putCustomRequestHandling"></a>

```python
def put_custom_request_handling(
  insert_header: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader]]
) -> None
```

###### `insert_header`<sup>Required</sup> <a name="insert_header" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.putCustomRequestHandling.parameter.insertHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>]]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

##### `reset_custom_request_handling` <a name="reset_custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.resetCustomRequestHandling"></a>

```python
def reset_custom_request_handling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.customRequestHandling">custom_request_handling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.customRequestHandlingInput">custom_request_handling_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_request_handling`<sup>Required</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.customRequestHandling"></a>

```python
custom_request_handling: Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference</a>

---

##### `custom_request_handling_input`<sup>Optional</sup> <a name="custom_request_handling_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.customRequestHandlingInput"></a>

```python
custom_request_handling_input: Wafv2WebAclRuleActionCountCustomRequestHandling
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleActionCount
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a>

---


### Wafv2WebAclRuleActionOutputReference <a name="Wafv2WebAclRuleActionOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putAllow">put_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putBlock">put_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCaptcha">put_captcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putChallenge">put_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCount">put_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetAllow">reset_allow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetBlock">reset_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetCaptcha">reset_captcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetChallenge">reset_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetCount">reset_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allow` <a name="put_allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putAllow"></a>

```python
def put_allow(
  custom_request_handling: Wafv2WebAclRuleActionAllowCustomRequestHandling = None
) -> None
```

###### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putAllow.parameter.customRequestHandling"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

##### `put_block` <a name="put_block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putBlock"></a>

```python
def put_block(
  custom_response: Wafv2WebAclRuleActionBlockCustomResponse = None
) -> None
```

###### `custom_response`<sup>Optional</sup> <a name="custom_response" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putBlock.parameter.customResponse"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a>

custom_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_response Wafv2WebAcl#custom_response}

---

##### `put_captcha` <a name="put_captcha" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCaptcha"></a>

```python
def put_captcha(
  custom_request_handling: Wafv2WebAclRuleActionCaptchaCustomRequestHandling = None
) -> None
```

###### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCaptcha.parameter.customRequestHandling"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

##### `put_challenge` <a name="put_challenge" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putChallenge"></a>

```python
def put_challenge(
  custom_request_handling: Wafv2WebAclRuleActionChallengeCustomRequestHandling = None
) -> None
```

###### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putChallenge.parameter.customRequestHandling"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

##### `put_count` <a name="put_count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCount"></a>

```python
def put_count(
  custom_request_handling: Wafv2WebAclRuleActionCountCustomRequestHandling = None
) -> None
```

###### `custom_request_handling`<sup>Optional</sup> <a name="custom_request_handling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCount.parameter.customRequestHandling"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

##### `reset_allow` <a name="reset_allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetAllow"></a>

```python
def reset_allow() -> None
```

##### `reset_block` <a name="reset_block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetBlock"></a>

```python
def reset_block() -> None
```

##### `reset_captcha` <a name="reset_captcha" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetCaptcha"></a>

```python
def reset_captcha() -> None
```

##### `reset_challenge` <a name="reset_challenge" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetChallenge"></a>

```python
def reset_challenge() -> None
```

##### `reset_count` <a name="reset_count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetCount"></a>

```python
def reset_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference">Wafv2WebAclRuleActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.block">block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference">Wafv2WebAclRuleActionBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.captcha">captcha</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference">Wafv2WebAclRuleActionCaptchaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.challenge">challenge</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference">Wafv2WebAclRuleActionChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.count">count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference">Wafv2WebAclRuleActionCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.allowInput">allow_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.blockInput">block_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.captchaInput">captcha_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.challengeInput">challenge_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.countInput">count_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.allow"></a>

```python
allow: Wafv2WebAclRuleActionAllowOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference">Wafv2WebAclRuleActionAllowOutputReference</a>

---

##### `block`<sup>Required</sup> <a name="block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.block"></a>

```python
block: Wafv2WebAclRuleActionBlockOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference">Wafv2WebAclRuleActionBlockOutputReference</a>

---

##### `captcha`<sup>Required</sup> <a name="captcha" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.captcha"></a>

```python
captcha: Wafv2WebAclRuleActionCaptchaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference">Wafv2WebAclRuleActionCaptchaOutputReference</a>

---

##### `challenge`<sup>Required</sup> <a name="challenge" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.challenge"></a>

```python
challenge: Wafv2WebAclRuleActionChallengeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference">Wafv2WebAclRuleActionChallengeOutputReference</a>

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.count"></a>

```python
count: Wafv2WebAclRuleActionCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference">Wafv2WebAclRuleActionCountOutputReference</a>

---

##### `allow_input`<sup>Optional</sup> <a name="allow_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.allowInput"></a>

```python
allow_input: Wafv2WebAclRuleActionAllow
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a>

---

##### `block_input`<sup>Optional</sup> <a name="block_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.blockInput"></a>

```python
block_input: Wafv2WebAclRuleActionBlock
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a>

---

##### `captcha_input`<sup>Optional</sup> <a name="captcha_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.captchaInput"></a>

```python
captcha_input: Wafv2WebAclRuleActionCaptcha
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a>

---

##### `challenge_input`<sup>Optional</sup> <a name="challenge_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.challengeInput"></a>

```python
challenge_input: Wafv2WebAclRuleActionChallenge
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a>

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.countInput"></a>

```python
count_input: Wafv2WebAclRuleActionCount
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a>

---


### Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference <a name="Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime">reset_immunity_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_immunity_time` <a name="reset_immunity_time" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime"></a>

```python
def reset_immunity_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput">immunity_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime">immunity_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `immunity_time_input`<sup>Optional</sup> <a name="immunity_time_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput"></a>

```python
immunity_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `immunity_time`<sup>Required</sup> <a name="immunity_time" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime"></a>

```python
immunity_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a>

---


### Wafv2WebAclRuleCaptchaConfigOutputReference <a name="Wafv2WebAclRuleCaptchaConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.putImmunityTimeProperty">put_immunity_time_property</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.resetImmunityTimeProperty">reset_immunity_time_property</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_immunity_time_property` <a name="put_immunity_time_property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.putImmunityTimeProperty"></a>

```python
def put_immunity_time_property(
  immunity_time: typing.Union[int, float] = None
) -> None
```

###### `immunity_time`<sup>Optional</sup> <a name="immunity_time" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.putImmunityTimeProperty.parameter.immunityTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}.

---

##### `reset_immunity_time_property` <a name="reset_immunity_time_property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.resetImmunityTimeProperty"></a>

```python
def reset_immunity_time_property() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.immunityTimeProperty">immunity_time_property</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference">Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.immunityTimePropertyInput">immunity_time_property_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `immunity_time_property`<sup>Required</sup> <a name="immunity_time_property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.immunityTimeProperty"></a>

```python
immunity_time_property: Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference">Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference</a>

---

##### `immunity_time_property_input`<sup>Optional</sup> <a name="immunity_time_property_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.immunityTimePropertyInput"></a>

```python
immunity_time_property_input: Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleCaptchaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a>

---


### Wafv2WebAclRuleList <a name="Wafv2WebAclRuleList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2WebAclRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2WebAclRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>]]

---


### Wafv2WebAclRuleOutputReference <a name="Wafv2WebAclRuleOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putCaptchaConfig">put_captcha_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putOverrideAction">put_override_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putRuleLabel">put_rule_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putVisibilityConfig">put_visibility_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetCaptchaConfig">reset_captcha_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetOverrideAction">reset_override_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetRuleLabel">reset_rule_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetStatement">reset_statement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putAction"></a>

```python
def put_action(
  allow: Wafv2WebAclRuleActionAllow = None,
  block: Wafv2WebAclRuleActionBlock = None,
  captcha: Wafv2WebAclRuleActionCaptcha = None,
  challenge: Wafv2WebAclRuleActionChallenge = None,
  count: Wafv2WebAclRuleActionCount = None
) -> None
```

###### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putAction.parameter.allow"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#allow Wafv2WebAcl#allow}

---

###### `block`<sup>Optional</sup> <a name="block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putAction.parameter.block"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a>

block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#block Wafv2WebAcl#block}

---

###### `captcha`<sup>Optional</sup> <a name="captcha" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putAction.parameter.captcha"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a>

captcha block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#captcha Wafv2WebAcl#captcha}

---

###### `challenge`<sup>Optional</sup> <a name="challenge" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putAction.parameter.challenge"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a>

challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#challenge Wafv2WebAcl#challenge}

---

###### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putAction.parameter.count"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a>

count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#count Wafv2WebAcl#count}

---

##### `put_captcha_config` <a name="put_captcha_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putCaptchaConfig"></a>

```python
def put_captcha_config(
  immunity_time_property: Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty = None
) -> None
```

###### `immunity_time_property`<sup>Optional</sup> <a name="immunity_time_property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putCaptchaConfig.parameter.immunityTimeProperty"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}

---

##### `put_override_action` <a name="put_override_action" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putOverrideAction"></a>

```python
def put_override_action(
  count: Wafv2WebAclRuleOverrideActionCount = None,
  none: Wafv2WebAclRuleOverrideActionNone = None
) -> None
```

###### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putOverrideAction.parameter.count"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a>

count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#count Wafv2WebAcl#count}

---

###### `none`<sup>Optional</sup> <a name="none" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putOverrideAction.parameter.none"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a>

none block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#none Wafv2WebAcl#none}

---

##### `put_rule_label` <a name="put_rule_label" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putRuleLabel"></a>

```python
def put_rule_label(
  value: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleRuleLabel]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putRuleLabel.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>]]

---

##### `put_visibility_config` <a name="put_visibility_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putVisibilityConfig"></a>

```python
def put_visibility_config(
  cloudwatch_metrics_enabled: typing.Union[bool, IResolvable],
  metric_name: str,
  sampled_requests_enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `cloudwatch_metrics_enabled`<sup>Required</sup> <a name="cloudwatch_metrics_enabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putVisibilityConfig.parameter.cloudwatchMetricsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}.

---

###### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putVisibilityConfig.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}.

---

###### `sampled_requests_enabled`<sup>Required</sup> <a name="sampled_requests_enabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putVisibilityConfig.parameter.sampledRequestsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}.

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_captcha_config` <a name="reset_captcha_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetCaptchaConfig"></a>

```python
def reset_captcha_config() -> None
```

##### `reset_override_action` <a name="reset_override_action" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetOverrideAction"></a>

```python
def reset_override_action() -> None
```

##### `reset_rule_label` <a name="reset_rule_label" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetRuleLabel"></a>

```python
def reset_rule_label() -> None
```

##### `reset_statement` <a name="reset_statement" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetStatement"></a>

```python
def reset_statement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference">Wafv2WebAclRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.captchaConfig">captcha_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference">Wafv2WebAclRuleCaptchaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.overrideAction">override_action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference">Wafv2WebAclRuleOverrideActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.ruleLabel">rule_label</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList">Wafv2WebAclRuleRuleLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.statementInput">statement_input</a></code> | <code>typing.Any</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.visibilityConfig">visibility_config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference">Wafv2WebAclRuleVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.captchaConfigInput">captcha_config_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.overrideActionInput">override_action_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.ruleLabelInput">rule_label_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.visibilityConfigInput">visibility_config_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.statement">statement</a></code> | <code>typing.Any</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.action"></a>

```python
action: Wafv2WebAclRuleActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference">Wafv2WebAclRuleActionOutputReference</a>

---

##### `captcha_config`<sup>Required</sup> <a name="captcha_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.captchaConfig"></a>

```python
captcha_config: Wafv2WebAclRuleCaptchaConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference">Wafv2WebAclRuleCaptchaConfigOutputReference</a>

---

##### `override_action`<sup>Required</sup> <a name="override_action" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.overrideAction"></a>

```python
override_action: Wafv2WebAclRuleOverrideActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference">Wafv2WebAclRuleOverrideActionOutputReference</a>

---

##### `rule_label`<sup>Required</sup> <a name="rule_label" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.ruleLabel"></a>

```python
rule_label: Wafv2WebAclRuleRuleLabelList
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList">Wafv2WebAclRuleRuleLabelList</a>

---

##### `statement_input`<sup>Required</sup> <a name="statement_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.statementInput"></a>

```python
statement_input: typing.Any
```

- *Type:* typing.Any

---

##### `visibility_config`<sup>Required</sup> <a name="visibility_config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.visibilityConfig"></a>

```python
visibility_config: Wafv2WebAclRuleVisibilityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference">Wafv2WebAclRuleVisibilityConfigOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.actionInput"></a>

```python
action_input: Wafv2WebAclRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a>

---

##### `captcha_config_input`<sup>Optional</sup> <a name="captcha_config_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.captchaConfigInput"></a>

```python
captcha_config_input: Wafv2WebAclRuleCaptchaConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `override_action_input`<sup>Optional</sup> <a name="override_action_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.overrideActionInput"></a>

```python
override_action_input: Wafv2WebAclRuleOverrideAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a>

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_label_input`<sup>Optional</sup> <a name="rule_label_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.ruleLabelInput"></a>

```python
rule_label_input: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleRuleLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>]]

---

##### `visibility_config_input`<sup>Optional</sup> <a name="visibility_config_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.visibilityConfigInput"></a>

```python
visibility_config_input: Wafv2WebAclRuleVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.statement"></a>

```python
statement: typing.Any
```

- *Type:* typing.Any

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2WebAclRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>]

---


### Wafv2WebAclRuleOverrideActionCountOutputReference <a name="Wafv2WebAclRuleOverrideActionCountOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleOverrideActionCount
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a>

---


### Wafv2WebAclRuleOverrideActionNoneOutputReference <a name="Wafv2WebAclRuleOverrideActionNoneOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleOverrideActionNone
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a>

---


### Wafv2WebAclRuleOverrideActionOutputReference <a name="Wafv2WebAclRuleOverrideActionOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.putCount">put_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.putNone">put_none</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resetCount">reset_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resetNone">reset_none</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_count` <a name="put_count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.putCount"></a>

```python
def put_count() -> None
```

##### `put_none` <a name="put_none" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.putNone"></a>

```python
def put_none() -> None
```

##### `reset_count` <a name="reset_count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resetCount"></a>

```python
def reset_count() -> None
```

##### `reset_none` <a name="reset_none" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resetNone"></a>

```python
def reset_none() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.count">count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference">Wafv2WebAclRuleOverrideActionCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.none">none</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference">Wafv2WebAclRuleOverrideActionNoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.countInput">count_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.noneInput">none_input</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.count"></a>

```python
count: Wafv2WebAclRuleOverrideActionCountOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference">Wafv2WebAclRuleOverrideActionCountOutputReference</a>

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.none"></a>

```python
none: Wafv2WebAclRuleOverrideActionNoneOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference">Wafv2WebAclRuleOverrideActionNoneOutputReference</a>

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.countInput"></a>

```python
count_input: Wafv2WebAclRuleOverrideActionCount
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a>

---

##### `none_input`<sup>Optional</sup> <a name="none_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.noneInput"></a>

```python
none_input: Wafv2WebAclRuleOverrideActionNone
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleOverrideAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a>

---


### Wafv2WebAclRuleRuleLabelList <a name="Wafv2WebAclRuleRuleLabelList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleRuleLabelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Wafv2WebAclRuleRuleLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Wafv2WebAclRuleRuleLabel]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>]]

---


### Wafv2WebAclRuleRuleLabelOutputReference <a name="Wafv2WebAclRuleRuleLabelOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, Wafv2WebAclRuleRuleLabel]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>]

---


### Wafv2WebAclRuleVisibilityConfigOutputReference <a name="Wafv2WebAclRuleVisibilityConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput">cloudwatch_metrics_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.sampledRequestsEnabledInput">sampled_requests_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled">cloudwatch_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.sampledRequestsEnabled">sampled_requests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_metrics_enabled_input`<sup>Optional</sup> <a name="cloudwatch_metrics_enabled_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```python
cloudwatch_metrics_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `sampled_requests_enabled_input`<sup>Optional</sup> <a name="sampled_requests_enabled_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.sampledRequestsEnabledInput"></a>

```python
sampled_requests_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloudwatch_metrics_enabled`<sup>Required</sup> <a name="cloudwatch_metrics_enabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled"></a>

```python
cloudwatch_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `sampled_requests_enabled`<sup>Required</sup> <a name="sampled_requests_enabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.sampledRequestsEnabled"></a>

```python
sampled_requests_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclRuleVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a>

---


### Wafv2WebAclVisibilityConfigOutputReference <a name="Wafv2WebAclVisibilityConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafv2_web_acl

wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput">cloudwatch_metrics_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.sampledRequestsEnabledInput">sampled_requests_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled">cloudwatch_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.sampledRequestsEnabled">sampled_requests_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_metrics_enabled_input`<sup>Optional</sup> <a name="cloudwatch_metrics_enabled_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```python
cloudwatch_metrics_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `sampled_requests_enabled_input`<sup>Optional</sup> <a name="sampled_requests_enabled_input" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.sampledRequestsEnabledInput"></a>

```python
sampled_requests_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cloudwatch_metrics_enabled`<sup>Required</sup> <a name="cloudwatch_metrics_enabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled"></a>

```python
cloudwatch_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `sampled_requests_enabled`<sup>Required</sup> <a name="sampled_requests_enabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.sampledRequestsEnabled"></a>

```python
sampled_requests_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.internalValue"></a>

```python
internal_value: Wafv2WebAclVisibilityConfig
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a>

---



