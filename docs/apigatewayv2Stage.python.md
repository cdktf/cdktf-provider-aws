# `apigatewayv2Stage` Submodule <a name="`apigatewayv2Stage` Submodule" id="@cdktf/provider-aws.apigatewayv2Stage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Stage <a name="Apigatewayv2Stage" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage aws_apigatewayv2_stage}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_stage

apigatewayv2Stage.Apigatewayv2Stage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  name: str,
  access_log_settings: Apigatewayv2StageAccessLogSettings = None,
  auto_deploy: typing.Union[bool, IResolvable] = None,
  client_certificate_id: str = None,
  default_route_settings: Apigatewayv2StageDefaultRouteSettings = None,
  deployment_id: str = None,
  description: str = None,
  id: str = None,
  route_settings: typing.Union[IResolvable, typing.List[Apigatewayv2StageRouteSettings]] = None,
  stage_variables: typing.Mapping[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#api_id Apigatewayv2Stage#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#name Apigatewayv2Stage#name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.accessLogSettings">access_log_settings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | access_log_settings block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.autoDeploy">auto_deploy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#auto_deploy Apigatewayv2Stage#auto_deploy}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.clientCertificateId">client_certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#client_certificate_id Apigatewayv2Stage#client_certificate_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.defaultRouteSettings">default_route_settings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | default_route_settings block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#deployment_id Apigatewayv2Stage#deployment_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#description Apigatewayv2Stage#description}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#id Apigatewayv2Stage#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.routeSettings">route_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>]]</code> | route_settings block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.stageVariables">stage_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#stage_variables Apigatewayv2Stage#stage_variables}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags Apigatewayv2Stage#tags}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags_all Apigatewayv2Stage#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.apiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#api_id Apigatewayv2Stage#api_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#name Apigatewayv2Stage#name}.

---

##### `access_log_settings`<sup>Optional</sup> <a name="access_log_settings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.accessLogSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

access_log_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#access_log_settings Apigatewayv2Stage#access_log_settings}

---

##### `auto_deploy`<sup>Optional</sup> <a name="auto_deploy" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.autoDeploy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#auto_deploy Apigatewayv2Stage#auto_deploy}.

---

##### `client_certificate_id`<sup>Optional</sup> <a name="client_certificate_id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.clientCertificateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#client_certificate_id Apigatewayv2Stage#client_certificate_id}.

---

##### `default_route_settings`<sup>Optional</sup> <a name="default_route_settings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.defaultRouteSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

default_route_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#default_route_settings Apigatewayv2Stage#default_route_settings}

---

##### `deployment_id`<sup>Optional</sup> <a name="deployment_id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.deploymentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#deployment_id Apigatewayv2Stage#deployment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#description Apigatewayv2Stage#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#id Apigatewayv2Stage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `route_settings`<sup>Optional</sup> <a name="route_settings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.routeSettings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>]]

route_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#route_settings Apigatewayv2Stage#route_settings}

---

##### `stage_variables`<sup>Optional</sup> <a name="stage_variables" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.stageVariables"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#stage_variables Apigatewayv2Stage#stage_variables}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags Apigatewayv2Stage#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags_all Apigatewayv2Stage#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings">put_access_log_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings">put_default_route_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putRouteSettings">put_route_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetAccessLogSettings">reset_access_log_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetAutoDeploy">reset_auto_deploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetClientCertificateId">reset_client_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDefaultRouteSettings">reset_default_route_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDeploymentId">reset_deployment_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetRouteSettings">reset_route_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetStageVariables">reset_stage_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_access_log_settings` <a name="put_access_log_settings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings"></a>

```python
def put_access_log_settings(
  destination_arn: str,
  format: str
) -> None
```

###### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings.parameter.destinationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#destination_arn Apigatewayv2Stage#destination_arn}.

---

###### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putAccessLogSettings.parameter.format"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#format Apigatewayv2Stage#format}.

---

##### `put_default_route_settings` <a name="put_default_route_settings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings"></a>

```python
def put_default_route_settings(
  data_trace_enabled: typing.Union[bool, IResolvable] = None,
  detailed_metrics_enabled: typing.Union[bool, IResolvable] = None,
  logging_level: str = None,
  throttling_burst_limit: typing.Union[int, float] = None,
  throttling_rate_limit: typing.Union[int, float] = None
) -> None
```

###### `data_trace_enabled`<sup>Optional</sup> <a name="data_trace_enabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings.parameter.dataTraceEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}.

---

###### `detailed_metrics_enabled`<sup>Optional</sup> <a name="detailed_metrics_enabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings.parameter.detailedMetricsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}.

---

###### `logging_level`<sup>Optional</sup> <a name="logging_level" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings.parameter.loggingLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}.

---

###### `throttling_burst_limit`<sup>Optional</sup> <a name="throttling_burst_limit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings.parameter.throttlingBurstLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}.

---

###### `throttling_rate_limit`<sup>Optional</sup> <a name="throttling_rate_limit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putDefaultRouteSettings.parameter.throttlingRateLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}.

---

##### `put_route_settings` <a name="put_route_settings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putRouteSettings"></a>

```python
def put_route_settings(
  value: typing.Union[IResolvable, typing.List[Apigatewayv2StageRouteSettings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.putRouteSettings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>]]

---

##### `reset_access_log_settings` <a name="reset_access_log_settings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetAccessLogSettings"></a>

```python
def reset_access_log_settings() -> None
```

##### `reset_auto_deploy` <a name="reset_auto_deploy" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetAutoDeploy"></a>

```python
def reset_auto_deploy() -> None
```

##### `reset_client_certificate_id` <a name="reset_client_certificate_id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetClientCertificateId"></a>

```python
def reset_client_certificate_id() -> None
```

##### `reset_default_route_settings` <a name="reset_default_route_settings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDefaultRouteSettings"></a>

```python
def reset_default_route_settings() -> None
```

##### `reset_deployment_id` <a name="reset_deployment_id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDeploymentId"></a>

```python
def reset_deployment_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_route_settings` <a name="reset_route_settings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetRouteSettings"></a>

```python
def reset_route_settings() -> None
```

##### `reset_stage_variables` <a name="reset_stage_variables" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetStageVariables"></a>

```python
def reset_stage_variables() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_stage

apigatewayv2Stage.Apigatewayv2Stage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_stage

apigatewayv2Stage.Apigatewayv2Stage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_stage

apigatewayv2Stage.Apigatewayv2Stage.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettings">access_log_settings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference">Apigatewayv2StageAccessLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettings">default_route_settings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference">Apigatewayv2StageDefaultRouteSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.executionArn">execution_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.invokeUrl">invoke_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettings">route_settings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList">Apigatewayv2StageRouteSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettingsInput">access_log_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeployInput">auto_deploy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateIdInput">client_certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettingsInput">default_route_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentIdInput">deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettingsInput">route_settings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariablesInput">stage_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeploy">auto_deploy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateId">client_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariables">stage_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_log_settings`<sup>Required</sup> <a name="access_log_settings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettings"></a>

```python
access_log_settings: Apigatewayv2StageAccessLogSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference">Apigatewayv2StageAccessLogSettingsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `default_route_settings`<sup>Required</sup> <a name="default_route_settings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettings"></a>

```python
default_route_settings: Apigatewayv2StageDefaultRouteSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference">Apigatewayv2StageDefaultRouteSettingsOutputReference</a>

---

##### `execution_arn`<sup>Required</sup> <a name="execution_arn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.executionArn"></a>

```python
execution_arn: str
```

- *Type:* str

---

##### `invoke_url`<sup>Required</sup> <a name="invoke_url" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.invokeUrl"></a>

```python
invoke_url: str
```

- *Type:* str

---

##### `route_settings`<sup>Required</sup> <a name="route_settings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettings"></a>

```python
route_settings: Apigatewayv2StageRouteSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList">Apigatewayv2StageRouteSettingsList</a>

---

##### `access_log_settings_input`<sup>Optional</sup> <a name="access_log_settings_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.accessLogSettingsInput"></a>

```python
access_log_settings_input: Apigatewayv2StageAccessLogSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `auto_deploy_input`<sup>Optional</sup> <a name="auto_deploy_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeployInput"></a>

```python
auto_deploy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_certificate_id_input`<sup>Optional</sup> <a name="client_certificate_id_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateIdInput"></a>

```python
client_certificate_id_input: str
```

- *Type:* str

---

##### `default_route_settings_input`<sup>Optional</sup> <a name="default_route_settings_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.defaultRouteSettingsInput"></a>

```python
default_route_settings_input: Apigatewayv2StageDefaultRouteSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

---

##### `deployment_id_input`<sup>Optional</sup> <a name="deployment_id_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentIdInput"></a>

```python
deployment_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `route_settings_input`<sup>Optional</sup> <a name="route_settings_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.routeSettingsInput"></a>

```python
route_settings_input: typing.Union[IResolvable, typing.List[Apigatewayv2StageRouteSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>]]

---

##### `stage_variables_input`<sup>Optional</sup> <a name="stage_variables_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariablesInput"></a>

```python
stage_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `auto_deploy`<sup>Required</sup> <a name="auto_deploy" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.autoDeploy"></a>

```python
auto_deploy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_certificate_id`<sup>Required</sup> <a name="client_certificate_id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.clientCertificateId"></a>

```python
client_certificate_id: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `stage_variables`<sup>Required</sup> <a name="stage_variables" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.stageVariables"></a>

```python
stage_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2Stage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2StageAccessLogSettings <a name="Apigatewayv2StageAccessLogSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_stage

apigatewayv2Stage.Apigatewayv2StageAccessLogSettings(
  destination_arn: str,
  format: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.destinationArn">destination_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#destination_arn Apigatewayv2Stage#destination_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#format Apigatewayv2Stage#format}. |

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#destination_arn Apigatewayv2Stage#destination_arn}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#format Apigatewayv2Stage#format}.

---

### Apigatewayv2StageConfig <a name="Apigatewayv2StageConfig" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_stage

apigatewayv2Stage.Apigatewayv2StageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  name: str,
  access_log_settings: Apigatewayv2StageAccessLogSettings = None,
  auto_deploy: typing.Union[bool, IResolvable] = None,
  client_certificate_id: str = None,
  default_route_settings: Apigatewayv2StageDefaultRouteSettings = None,
  deployment_id: str = None,
  description: str = None,
  id: str = None,
  route_settings: typing.Union[IResolvable, typing.List[Apigatewayv2StageRouteSettings]] = None,
  stage_variables: typing.Mapping[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#api_id Apigatewayv2Stage#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#name Apigatewayv2Stage#name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.accessLogSettings">access_log_settings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | access_log_settings block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.autoDeploy">auto_deploy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#auto_deploy Apigatewayv2Stage#auto_deploy}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.clientCertificateId">client_certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#client_certificate_id Apigatewayv2Stage#client_certificate_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.defaultRouteSettings">default_route_settings</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | default_route_settings block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.deploymentId">deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#deployment_id Apigatewayv2Stage#deployment_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#description Apigatewayv2Stage#description}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#id Apigatewayv2Stage#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.routeSettings">route_settings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>]]</code> | route_settings block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageVariables">stage_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#stage_variables Apigatewayv2Stage#stage_variables}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags Apigatewayv2Stage#tags}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags_all Apigatewayv2Stage#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#api_id Apigatewayv2Stage#api_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#name Apigatewayv2Stage#name}.

---

##### `access_log_settings`<sup>Optional</sup> <a name="access_log_settings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.accessLogSettings"></a>

```python
access_log_settings: Apigatewayv2StageAccessLogSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

access_log_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#access_log_settings Apigatewayv2Stage#access_log_settings}

---

##### `auto_deploy`<sup>Optional</sup> <a name="auto_deploy" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.autoDeploy"></a>

```python
auto_deploy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#auto_deploy Apigatewayv2Stage#auto_deploy}.

---

##### `client_certificate_id`<sup>Optional</sup> <a name="client_certificate_id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.clientCertificateId"></a>

```python
client_certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#client_certificate_id Apigatewayv2Stage#client_certificate_id}.

---

##### `default_route_settings`<sup>Optional</sup> <a name="default_route_settings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.defaultRouteSettings"></a>

```python
default_route_settings: Apigatewayv2StageDefaultRouteSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

default_route_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#default_route_settings Apigatewayv2Stage#default_route_settings}

---

##### `deployment_id`<sup>Optional</sup> <a name="deployment_id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#deployment_id Apigatewayv2Stage#deployment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#description Apigatewayv2Stage#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#id Apigatewayv2Stage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `route_settings`<sup>Optional</sup> <a name="route_settings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.routeSettings"></a>

```python
route_settings: typing.Union[IResolvable, typing.List[Apigatewayv2StageRouteSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>]]

route_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#route_settings Apigatewayv2Stage#route_settings}

---

##### `stage_variables`<sup>Optional</sup> <a name="stage_variables" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.stageVariables"></a>

```python
stage_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#stage_variables Apigatewayv2Stage#stage_variables}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags Apigatewayv2Stage#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#tags_all Apigatewayv2Stage#tags_all}.

---

### Apigatewayv2StageDefaultRouteSettings <a name="Apigatewayv2StageDefaultRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_stage

apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings(
  data_trace_enabled: typing.Union[bool, IResolvable] = None,
  detailed_metrics_enabled: typing.Union[bool, IResolvable] = None,
  logging_level: str = None,
  throttling_burst_limit: typing.Union[int, float] = None,
  throttling_rate_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.dataTraceEnabled">data_trace_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.detailedMetricsEnabled">detailed_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.loggingLevel">logging_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingBurstLimit">throttling_burst_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingRateLimit">throttling_rate_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}. |

---

##### `data_trace_enabled`<sup>Optional</sup> <a name="data_trace_enabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.dataTraceEnabled"></a>

```python
data_trace_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}.

---

##### `detailed_metrics_enabled`<sup>Optional</sup> <a name="detailed_metrics_enabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.detailedMetricsEnabled"></a>

```python
detailed_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}.

---

##### `logging_level`<sup>Optional</sup> <a name="logging_level" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}.

---

##### `throttling_burst_limit`<sup>Optional</sup> <a name="throttling_burst_limit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingBurstLimit"></a>

```python
throttling_burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}.

---

##### `throttling_rate_limit`<sup>Optional</sup> <a name="throttling_rate_limit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings.property.throttlingRateLimit"></a>

```python
throttling_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}.

---

### Apigatewayv2StageRouteSettings <a name="Apigatewayv2StageRouteSettings" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_stage

apigatewayv2Stage.Apigatewayv2StageRouteSettings(
  route_key: str,
  data_trace_enabled: typing.Union[bool, IResolvable] = None,
  detailed_metrics_enabled: typing.Union[bool, IResolvable] = None,
  logging_level: str = None,
  throttling_burst_limit: typing.Union[int, float] = None,
  throttling_rate_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.routeKey">route_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#route_key Apigatewayv2Stage#route_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.dataTraceEnabled">data_trace_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.detailedMetricsEnabled">detailed_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.loggingLevel">logging_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.throttlingBurstLimit">throttling_burst_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.throttlingRateLimit">throttling_rate_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}. |

---

##### `route_key`<sup>Required</sup> <a name="route_key" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.routeKey"></a>

```python
route_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#route_key Apigatewayv2Stage#route_key}.

---

##### `data_trace_enabled`<sup>Optional</sup> <a name="data_trace_enabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.dataTraceEnabled"></a>

```python
data_trace_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#data_trace_enabled Apigatewayv2Stage#data_trace_enabled}.

---

##### `detailed_metrics_enabled`<sup>Optional</sup> <a name="detailed_metrics_enabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.detailedMetricsEnabled"></a>

```python
detailed_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#detailed_metrics_enabled Apigatewayv2Stage#detailed_metrics_enabled}.

---

##### `logging_level`<sup>Optional</sup> <a name="logging_level" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#logging_level Apigatewayv2Stage#logging_level}.

---

##### `throttling_burst_limit`<sup>Optional</sup> <a name="throttling_burst_limit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.throttlingBurstLimit"></a>

```python
throttling_burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_burst_limit Apigatewayv2Stage#throttling_burst_limit}.

---

##### `throttling_rate_limit`<sup>Optional</sup> <a name="throttling_rate_limit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings.property.throttlingRateLimit"></a>

```python
throttling_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_stage#throttling_rate_limit Apigatewayv2Stage#throttling_rate_limit}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2StageAccessLogSettingsOutputReference <a name="Apigatewayv2StageAccessLogSettingsOutputReference" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_stage

apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArnInput">destination_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_arn_input`<sup>Optional</sup> <a name="destination_arn_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArnInput"></a>

```python
destination_arn_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettingsOutputReference.property.internalValue"></a>

```python
internal_value: Apigatewayv2StageAccessLogSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageAccessLogSettings">Apigatewayv2StageAccessLogSettings</a>

---


### Apigatewayv2StageDefaultRouteSettingsOutputReference <a name="Apigatewayv2StageDefaultRouteSettingsOutputReference" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_stage

apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDataTraceEnabled">reset_data_trace_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDetailedMetricsEnabled">reset_detailed_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetLoggingLevel">reset_logging_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingBurstLimit">reset_throttling_burst_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingRateLimit">reset_throttling_rate_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_trace_enabled` <a name="reset_data_trace_enabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDataTraceEnabled"></a>

```python
def reset_data_trace_enabled() -> None
```

##### `reset_detailed_metrics_enabled` <a name="reset_detailed_metrics_enabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetDetailedMetricsEnabled"></a>

```python
def reset_detailed_metrics_enabled() -> None
```

##### `reset_logging_level` <a name="reset_logging_level" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetLoggingLevel"></a>

```python
def reset_logging_level() -> None
```

##### `reset_throttling_burst_limit` <a name="reset_throttling_burst_limit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingBurstLimit"></a>

```python
def reset_throttling_burst_limit() -> None
```

##### `reset_throttling_rate_limit` <a name="reset_throttling_rate_limit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.resetThrottlingRateLimit"></a>

```python
def reset_throttling_rate_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabledInput">data_trace_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabledInput">detailed_metrics_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevelInput">logging_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimitInput">throttling_burst_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimitInput">throttling_rate_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabled">data_trace_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled">detailed_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevel">logging_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit">throttling_burst_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimit">throttling_rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_trace_enabled_input`<sup>Optional</sup> <a name="data_trace_enabled_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabledInput"></a>

```python
data_trace_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `detailed_metrics_enabled_input`<sup>Optional</sup> <a name="detailed_metrics_enabled_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabledInput"></a>

```python
detailed_metrics_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `logging_level_input`<sup>Optional</sup> <a name="logging_level_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevelInput"></a>

```python
logging_level_input: str
```

- *Type:* str

---

##### `throttling_burst_limit_input`<sup>Optional</sup> <a name="throttling_burst_limit_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```python
throttling_burst_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_rate_limit_input`<sup>Optional</sup> <a name="throttling_rate_limit_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimitInput"></a>

```python
throttling_rate_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_trace_enabled`<sup>Required</sup> <a name="data_trace_enabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.dataTraceEnabled"></a>

```python
data_trace_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `detailed_metrics_enabled`<sup>Required</sup> <a name="detailed_metrics_enabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.detailedMetricsEnabled"></a>

```python
detailed_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `logging_level`<sup>Required</sup> <a name="logging_level" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

---

##### `throttling_burst_limit`<sup>Required</sup> <a name="throttling_burst_limit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingBurstLimit"></a>

```python
throttling_burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_rate_limit`<sup>Required</sup> <a name="throttling_rate_limit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.throttlingRateLimit"></a>

```python
throttling_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettingsOutputReference.property.internalValue"></a>

```python
internal_value: Apigatewayv2StageDefaultRouteSettings
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageDefaultRouteSettings">Apigatewayv2StageDefaultRouteSettings</a>

---


### Apigatewayv2StageRouteSettingsList <a name="Apigatewayv2StageRouteSettingsList" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_stage

apigatewayv2Stage.Apigatewayv2StageRouteSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Apigatewayv2StageRouteSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Apigatewayv2StageRouteSettings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>]]

---


### Apigatewayv2StageRouteSettingsOutputReference <a name="Apigatewayv2StageRouteSettingsOutputReference" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_stage

apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetDataTraceEnabled">reset_data_trace_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetDetailedMetricsEnabled">reset_detailed_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetLoggingLevel">reset_logging_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetThrottlingBurstLimit">reset_throttling_burst_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetThrottlingRateLimit">reset_throttling_rate_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_trace_enabled` <a name="reset_data_trace_enabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetDataTraceEnabled"></a>

```python
def reset_data_trace_enabled() -> None
```

##### `reset_detailed_metrics_enabled` <a name="reset_detailed_metrics_enabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetDetailedMetricsEnabled"></a>

```python
def reset_detailed_metrics_enabled() -> None
```

##### `reset_logging_level` <a name="reset_logging_level" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetLoggingLevel"></a>

```python
def reset_logging_level() -> None
```

##### `reset_throttling_burst_limit` <a name="reset_throttling_burst_limit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetThrottlingBurstLimit"></a>

```python
def reset_throttling_burst_limit() -> None
```

##### `reset_throttling_rate_limit` <a name="reset_throttling_rate_limit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.resetThrottlingRateLimit"></a>

```python
def reset_throttling_rate_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.dataTraceEnabledInput">data_trace_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.detailedMetricsEnabledInput">detailed_metrics_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.loggingLevelInput">logging_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.routeKeyInput">route_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingBurstLimitInput">throttling_burst_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingRateLimitInput">throttling_rate_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.dataTraceEnabled">data_trace_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.detailedMetricsEnabled">detailed_metrics_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.loggingLevel">logging_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.routeKey">route_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingBurstLimit">throttling_burst_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingRateLimit">throttling_rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_trace_enabled_input`<sup>Optional</sup> <a name="data_trace_enabled_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.dataTraceEnabledInput"></a>

```python
data_trace_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `detailed_metrics_enabled_input`<sup>Optional</sup> <a name="detailed_metrics_enabled_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.detailedMetricsEnabledInput"></a>

```python
detailed_metrics_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `logging_level_input`<sup>Optional</sup> <a name="logging_level_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.loggingLevelInput"></a>

```python
logging_level_input: str
```

- *Type:* str

---

##### `route_key_input`<sup>Optional</sup> <a name="route_key_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.routeKeyInput"></a>

```python
route_key_input: str
```

- *Type:* str

---

##### `throttling_burst_limit_input`<sup>Optional</sup> <a name="throttling_burst_limit_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```python
throttling_burst_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_rate_limit_input`<sup>Optional</sup> <a name="throttling_rate_limit_input" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingRateLimitInput"></a>

```python
throttling_rate_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_trace_enabled`<sup>Required</sup> <a name="data_trace_enabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.dataTraceEnabled"></a>

```python
data_trace_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `detailed_metrics_enabled`<sup>Required</sup> <a name="detailed_metrics_enabled" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.detailedMetricsEnabled"></a>

```python
detailed_metrics_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `logging_level`<sup>Required</sup> <a name="logging_level" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

---

##### `route_key`<sup>Required</sup> <a name="route_key" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.routeKey"></a>

```python
route_key: str
```

- *Type:* str

---

##### `throttling_burst_limit`<sup>Required</sup> <a name="throttling_burst_limit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingBurstLimit"></a>

```python
throttling_burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throttling_rate_limit`<sup>Required</sup> <a name="throttling_rate_limit" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.throttlingRateLimit"></a>

```python
throttling_rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Apigatewayv2StageRouteSettings, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.apigatewayv2Stage.Apigatewayv2StageRouteSettings">Apigatewayv2StageRouteSettings</a>, cdktf.IResolvable]

---



