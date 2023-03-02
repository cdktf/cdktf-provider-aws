# `route53RecoveryreadinessResourceSet` Submodule <a name="`route53RecoveryreadinessResourceSet` Submodule" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoveryreadinessResourceSet <a name="Route53RecoveryreadinessResourceSet" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set aws_route53recoveryreadiness_resource_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  resources: typing.Union[IResolvable, typing.List[Route53RecoveryreadinessResourceSetResources]],
  resource_set_name: str,
  resource_set_type: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: Route53RecoveryreadinessResourceSetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.resources">resources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>]]</code> | resources block. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.resourceSetName">resource_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_set_name Route53RecoveryreadinessResourceSet#resource_set_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.resourceSetType">resource_set_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_set_type Route53RecoveryreadinessResourceSet#resource_set_type}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#id Route53RecoveryreadinessResourceSet#id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#tags Route53RecoveryreadinessResourceSet#tags}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#tags_all Route53RecoveryreadinessResourceSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.resources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>]]

resources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resources Route53RecoveryreadinessResourceSet#resources}

---

##### `resource_set_name`<sup>Required</sup> <a name="resource_set_name" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.resourceSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_set_name Route53RecoveryreadinessResourceSet#resource_set_name}.

---

##### `resource_set_type`<sup>Required</sup> <a name="resource_set_type" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.resourceSetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_set_type Route53RecoveryreadinessResourceSet#resource_set_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#id Route53RecoveryreadinessResourceSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#tags Route53RecoveryreadinessResourceSet#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#tags_all Route53RecoveryreadinessResourceSet#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#timeouts Route53RecoveryreadinessResourceSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_resources` <a name="put_resources" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putResources"></a>

```python
def put_resources(
  value: typing.Union[IResolvable, typing.List[Route53RecoveryreadinessResourceSetResources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putResources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putTimeouts"></a>

```python
def put_timeouts(
  delete: str = None
) -> None
```

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#delete Route53RecoveryreadinessResourceSet#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList">Route53RecoveryreadinessResourceSetResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference">Route53RecoveryreadinessResourceSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetNameInput">resource_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetTypeInput">resource_set_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourcesInput">resources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetName">resource_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetType">resource_set_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resources"></a>

```python
resources: Route53RecoveryreadinessResourceSetResourcesList
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList">Route53RecoveryreadinessResourceSetResourcesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.timeouts"></a>

```python
timeouts: Route53RecoveryreadinessResourceSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference">Route53RecoveryreadinessResourceSetTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_set_name_input`<sup>Optional</sup> <a name="resource_set_name_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetNameInput"></a>

```python
resource_set_name_input: str
```

- *Type:* str

---

##### `resource_set_type_input`<sup>Optional</sup> <a name="resource_set_type_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetTypeInput"></a>

```python
resource_set_type_input: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourcesInput"></a>

```python
resources_input: typing.Union[IResolvable, typing.List[Route53RecoveryreadinessResourceSetResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[Route53RecoveryreadinessResourceSetTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_set_name`<sup>Required</sup> <a name="resource_set_name" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetName"></a>

```python
resource_set_name: str
```

- *Type:* str

---

##### `resource_set_type`<sup>Required</sup> <a name="resource_set_type" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.resourceSetType"></a>

```python
resource_set_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoveryreadinessResourceSetConfig <a name="Route53RecoveryreadinessResourceSetConfig" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  resources: typing.Union[IResolvable, typing.List[Route53RecoveryreadinessResourceSetResources]],
  resource_set_name: str,
  resource_set_type: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: Route53RecoveryreadinessResourceSetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resources">resources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>]]</code> | resources block. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resourceSetName">resource_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_set_name Route53RecoveryreadinessResourceSet#resource_set_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resourceSetType">resource_set_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_set_type Route53RecoveryreadinessResourceSet#resource_set_type}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#id Route53RecoveryreadinessResourceSet#id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#tags Route53RecoveryreadinessResourceSet#tags}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#tags_all Route53RecoveryreadinessResourceSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resources"></a>

```python
resources: typing.Union[IResolvable, typing.List[Route53RecoveryreadinessResourceSetResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>]]

resources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resources Route53RecoveryreadinessResourceSet#resources}

---

##### `resource_set_name`<sup>Required</sup> <a name="resource_set_name" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resourceSetName"></a>

```python
resource_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_set_name Route53RecoveryreadinessResourceSet#resource_set_name}.

---

##### `resource_set_type`<sup>Required</sup> <a name="resource_set_type" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.resourceSetType"></a>

```python
resource_set_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_set_type Route53RecoveryreadinessResourceSet#resource_set_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#id Route53RecoveryreadinessResourceSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#tags Route53RecoveryreadinessResourceSet#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#tags_all Route53RecoveryreadinessResourceSet#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetConfig.property.timeouts"></a>

```python
timeouts: Route53RecoveryreadinessResourceSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#timeouts Route53RecoveryreadinessResourceSet#timeouts}

---

### Route53RecoveryreadinessResourceSetResources <a name="Route53RecoveryreadinessResourceSetResources" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources(
  dns_target_resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource = None,
  readiness_scopes: typing.List[str] = None,
  resource_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.dnsTargetResource">dns_target_resource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a></code> | dns_target_resource block. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.readinessScopes">readiness_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#readiness_scopes Route53RecoveryreadinessResourceSet#readiness_scopes}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_arn Route53RecoveryreadinessResourceSet#resource_arn}. |

---

##### `dns_target_resource`<sup>Optional</sup> <a name="dns_target_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.dnsTargetResource"></a>

```python
dns_target_resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a>

dns_target_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#dns_target_resource Route53RecoveryreadinessResourceSet#dns_target_resource}

---

##### `readiness_scopes`<sup>Optional</sup> <a name="readiness_scopes" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.readinessScopes"></a>

```python
readiness_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#readiness_scopes Route53RecoveryreadinessResourceSet#readiness_scopes}.

---

##### `resource_arn`<sup>Optional</sup> <a name="resource_arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#resource_arn Route53RecoveryreadinessResourceSet#resource_arn}.

---

### Route53RecoveryreadinessResourceSetResourcesDnsTargetResource <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource(
  domain_name: str,
  hosted_zone_arn: str = None,
  record_set_id: str = None,
  record_type: str = None,
  target_resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.hostedZoneArn">hosted_zone_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#hosted_zone_arn Route53RecoveryreadinessResourceSet#hosted_zone_arn}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.recordSetId">record_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.recordType">record_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_type Route53RecoveryreadinessResourceSet#record_type}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.targetResource">target_resource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a></code> | target_resource block. |

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}.

---

##### `hosted_zone_arn`<sup>Optional</sup> <a name="hosted_zone_arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.hostedZoneArn"></a>

```python
hosted_zone_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#hosted_zone_arn Route53RecoveryreadinessResourceSet#hosted_zone_arn}.

---

##### `record_set_id`<sup>Optional</sup> <a name="record_set_id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.recordSetId"></a>

```python
record_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}.

---

##### `record_type`<sup>Optional</sup> <a name="record_type" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.recordType"></a>

```python
record_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_type Route53RecoveryreadinessResourceSet#record_type}.

---

##### `target_resource`<sup>Optional</sup> <a name="target_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource.property.targetResource"></a>

```python
target_resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a>

target_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#target_resource Route53RecoveryreadinessResourceSet#target_resource}

---

### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource(
  nlb_resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource = None,
  r53_resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource.property.nlbResource">nlb_resource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a></code> | nlb_resource block. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource.property.r53Resource">r53_resource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a></code> | r53_resource block. |

---

##### `nlb_resource`<sup>Optional</sup> <a name="nlb_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource.property.nlbResource"></a>

```python
nlb_resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a>

nlb_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#nlb_resource Route53RecoveryreadinessResourceSet#nlb_resource}

---

##### `r53_resource`<sup>Optional</sup> <a name="r53_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource.property.r53Resource"></a>

```python
r53_resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a>

r53_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#r53_resource Route53RecoveryreadinessResourceSet#r53_resource}

---

### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource(
  arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#arn Route53RecoveryreadinessResourceSet#arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#arn Route53RecoveryreadinessResourceSet#arn}.

---

### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource(
  domain_name: str = None,
  record_set_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource.property.recordSetId">record_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}. |

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}.

---

##### `record_set_id`<sup>Optional</sup> <a name="record_set_id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource.property.recordSetId"></a>

```python
record_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}.

---

### Route53RecoveryreadinessResourceSetTimeouts <a name="Route53RecoveryreadinessResourceSetTimeouts" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts(
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#delete Route53RecoveryreadinessResourceSet#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#delete Route53RecoveryreadinessResourceSet#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.putTargetResource">put_target_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetHostedZoneArn">reset_hosted_zone_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetRecordSetId">reset_record_set_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetRecordType">reset_record_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetTargetResource">reset_target_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_resource` <a name="put_target_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.putTargetResource"></a>

```python
def put_target_resource(
  nlb_resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource = None,
  r53_resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource = None
) -> None
```

###### `nlb_resource`<sup>Optional</sup> <a name="nlb_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.putTargetResource.parameter.nlbResource"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a>

nlb_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#nlb_resource Route53RecoveryreadinessResourceSet#nlb_resource}

---

###### `r53_resource`<sup>Optional</sup> <a name="r53_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.putTargetResource.parameter.r53Resource"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a>

r53_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#r53_resource Route53RecoveryreadinessResourceSet#r53_resource}

---

##### `reset_hosted_zone_arn` <a name="reset_hosted_zone_arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetHostedZoneArn"></a>

```python
def reset_hosted_zone_arn() -> None
```

##### `reset_record_set_id` <a name="reset_record_set_id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetRecordSetId"></a>

```python
def reset_record_set_id() -> None
```

##### `reset_record_type` <a name="reset_record_type" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetRecordType"></a>

```python
def reset_record_type() -> None
```

##### `reset_target_resource` <a name="reset_target_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resetTargetResource"></a>

```python
def reset_target_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.targetResource">target_resource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.hostedZoneArnInput">hosted_zone_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordSetIdInput">record_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordTypeInput">record_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.targetResourceInput">target_resource_input</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.hostedZoneArn">hosted_zone_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordSetId">record_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordType">record_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_resource`<sup>Required</sup> <a name="target_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.targetResource"></a>

```python
target_resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `hosted_zone_arn_input`<sup>Optional</sup> <a name="hosted_zone_arn_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.hostedZoneArnInput"></a>

```python
hosted_zone_arn_input: str
```

- *Type:* str

---

##### `record_set_id_input`<sup>Optional</sup> <a name="record_set_id_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordSetIdInput"></a>

```python
record_set_id_input: str
```

- *Type:* str

---

##### `record_type_input`<sup>Optional</sup> <a name="record_type_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordTypeInput"></a>

```python
record_type_input: str
```

- *Type:* str

---

##### `target_resource_input`<sup>Optional</sup> <a name="target_resource_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.targetResourceInput"></a>

```python
target_resource_input: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a>

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `hosted_zone_arn`<sup>Required</sup> <a name="hosted_zone_arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.hostedZoneArn"></a>

```python
hosted_zone_arn: str
```

- *Type:* str

---

##### `record_set_id`<sup>Required</sup> <a name="record_set_id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordSetId"></a>

```python
record_set_id: str
```

- *Type:* str

---

##### `record_type`<sup>Required</sup> <a name="record_type" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordType"></a>

```python
record_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.internalValue"></a>

```python
internal_value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a>

---


### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resetArn">reset_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.internalValue"></a>

```python
internal_value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a>

---


### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putNlbResource">put_nlb_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putR53Resource">put_r53_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resetNlbResource">reset_nlb_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resetR53Resource">reset_r53_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_nlb_resource` <a name="put_nlb_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putNlbResource"></a>

```python
def put_nlb_resource(
  arn: str = None
) -> None
```

###### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putNlbResource.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#arn Route53RecoveryreadinessResourceSet#arn}.

---

##### `put_r53_resource` <a name="put_r53_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putR53Resource"></a>

```python
def put_r53_resource(
  domain_name: str = None,
  record_set_id: str = None
) -> None
```

###### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putR53Resource.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}.

---

###### `record_set_id`<sup>Optional</sup> <a name="record_set_id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.putR53Resource.parameter.recordSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}.

---

##### `reset_nlb_resource` <a name="reset_nlb_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resetNlbResource"></a>

```python
def reset_nlb_resource() -> None
```

##### `reset_r53_resource` <a name="reset_r53_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resetR53Resource"></a>

```python
def reset_r53_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.nlbResource">nlb_resource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.r53Resource">r53_resource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.nlbResourceInput">nlb_resource_input</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.r53ResourceInput">r53_resource_input</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nlb_resource`<sup>Required</sup> <a name="nlb_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.nlbResource"></a>

```python
nlb_resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference</a>

---

##### `r53_resource`<sup>Required</sup> <a name="r53_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.r53Resource"></a>

```python
r53_resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference</a>

---

##### `nlb_resource_input`<sup>Optional</sup> <a name="nlb_resource_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.nlbResourceInput"></a>

```python
nlb_resource_input: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a>

---

##### `r53_resource_input`<sup>Optional</sup> <a name="r53_resource_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.r53ResourceInput"></a>

```python
r53_resource_input: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.internalValue"></a>

```python
internal_value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a>

---


### Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference <a name="Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resetRecordSetId">reset_record_set_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_record_set_id` <a name="reset_record_set_id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resetRecordSetId"></a>

```python
def reset_record_set_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.recordSetIdInput">record_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.recordSetId">record_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `record_set_id_input`<sup>Optional</sup> <a name="record_set_id_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.recordSetIdInput"></a>

```python
record_set_id_input: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `record_set_id`<sup>Required</sup> <a name="record_set_id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.recordSetId"></a>

```python
record_set_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.internalValue"></a>

```python
internal_value: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a>

---


### Route53RecoveryreadinessResourceSetResourcesList <a name="Route53RecoveryreadinessResourceSetResourcesList" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Route53RecoveryreadinessResourceSetResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Route53RecoveryreadinessResourceSetResources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>]]

---


### Route53RecoveryreadinessResourceSetResourcesOutputReference <a name="Route53RecoveryreadinessResourceSetResourcesOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.putDnsTargetResource">put_dns_target_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetDnsTargetResource">reset_dns_target_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetReadinessScopes">reset_readiness_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetResourceArn">reset_resource_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns_target_resource` <a name="put_dns_target_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.putDnsTargetResource"></a>

```python
def put_dns_target_resource(
  domain_name: str,
  hosted_zone_arn: str = None,
  record_set_id: str = None,
  record_type: str = None,
  target_resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource = None
) -> None
```

###### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.putDnsTargetResource.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#domain_name Route53RecoveryreadinessResourceSet#domain_name}.

---

###### `hosted_zone_arn`<sup>Optional</sup> <a name="hosted_zone_arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.putDnsTargetResource.parameter.hostedZoneArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#hosted_zone_arn Route53RecoveryreadinessResourceSet#hosted_zone_arn}.

---

###### `record_set_id`<sup>Optional</sup> <a name="record_set_id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.putDnsTargetResource.parameter.recordSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_set_id Route53RecoveryreadinessResourceSet#record_set_id}.

---

###### `record_type`<sup>Optional</sup> <a name="record_type" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.putDnsTargetResource.parameter.recordType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#record_type Route53RecoveryreadinessResourceSet#record_type}.

---

###### `target_resource`<sup>Optional</sup> <a name="target_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.putDnsTargetResource.parameter.targetResource"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a>

target_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53recoveryreadiness_resource_set#target_resource Route53RecoveryreadinessResourceSet#target_resource}

---

##### `reset_dns_target_resource` <a name="reset_dns_target_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetDnsTargetResource"></a>

```python
def reset_dns_target_resource() -> None
```

##### `reset_readiness_scopes` <a name="reset_readiness_scopes" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetReadinessScopes"></a>

```python
def reset_readiness_scopes() -> None
```

##### `reset_resource_arn` <a name="reset_resource_arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.resetResourceArn"></a>

```python
def reset_resource_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.componentId">component_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.dnsTargetResource">dns_target_resource</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.dnsTargetResourceInput">dns_target_resource_input</a></code> | <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.readinessScopesInput">readiness_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.readinessScopes">readiness_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_id`<sup>Required</sup> <a name="component_id" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.componentId"></a>

```python
component_id: str
```

- *Type:* str

---

##### `dns_target_resource`<sup>Required</sup> <a name="dns_target_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.dnsTargetResource"></a>

```python
dns_target_resource: Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference">Route53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference</a>

---

##### `dns_target_resource_input`<sup>Optional</sup> <a name="dns_target_resource_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.dnsTargetResourceInput"></a>

```python
dns_target_resource_input: Route53RecoveryreadinessResourceSetResourcesDnsTargetResource
```

- *Type:* <a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesDnsTargetResource">Route53RecoveryreadinessResourceSetResourcesDnsTargetResource</a>

---

##### `readiness_scopes_input`<sup>Optional</sup> <a name="readiness_scopes_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.readinessScopesInput"></a>

```python
readiness_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `readiness_scopes`<sup>Required</sup> <a name="readiness_scopes" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.readinessScopes"></a>

```python
readiness_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Route53RecoveryreadinessResourceSetResources, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetResources">Route53RecoveryreadinessResourceSetResources</a>, cdktf.IResolvable]

---


### Route53RecoveryreadinessResourceSetTimeoutsOutputReference <a name="Route53RecoveryreadinessResourceSetTimeoutsOutputReference" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_recoveryreadiness_resource_set

route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Route53RecoveryreadinessResourceSetTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.route53RecoveryreadinessResourceSet.Route53RecoveryreadinessResourceSetTimeouts">Route53RecoveryreadinessResourceSetTimeouts</a>, cdktf.IResolvable]

---



