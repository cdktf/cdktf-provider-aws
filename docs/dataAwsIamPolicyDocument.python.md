# `dataAwsIamPolicyDocument` Submodule <a name="`dataAwsIamPolicyDocument` Submodule" id="@cdktf/provider-aws.dataAwsIamPolicyDocument"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIamPolicyDocument <a name="DataAwsIamPolicyDocument" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document aws_iam_policy_document}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocument(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  override_json: str = None,
  override_policy_documents: typing.List[str] = None,
  policy_id: str = None,
  source_json: str = None,
  source_policy_documents: typing.List[str] = None,
  statement: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatement]] = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#id DataAwsIamPolicyDocument#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.overrideJson">override_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_json DataAwsIamPolicyDocument#override_json}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.overridePolicyDocuments">override_policy_documents</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_policy_documents DataAwsIamPolicyDocument#override_policy_documents}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#policy_id DataAwsIamPolicyDocument#policy_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.sourceJson">source_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_json DataAwsIamPolicyDocument#source_json}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.sourcePolicyDocuments">source_policy_documents</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_policy_documents DataAwsIamPolicyDocument#source_policy_documents}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.statement">statement</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>]]</code> | statement block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#version DataAwsIamPolicyDocument#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#id DataAwsIamPolicyDocument#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override_json`<sup>Optional</sup> <a name="override_json" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.overrideJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_json DataAwsIamPolicyDocument#override_json}.

---

##### `override_policy_documents`<sup>Optional</sup> <a name="override_policy_documents" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.overridePolicyDocuments"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_policy_documents DataAwsIamPolicyDocument#override_policy_documents}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.policyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#policy_id DataAwsIamPolicyDocument#policy_id}.

---

##### `source_json`<sup>Optional</sup> <a name="source_json" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.sourceJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_json DataAwsIamPolicyDocument#source_json}.

---

##### `source_policy_documents`<sup>Optional</sup> <a name="source_policy_documents" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.sourcePolicyDocuments"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_policy_documents DataAwsIamPolicyDocument#source_policy_documents}.

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.statement"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>]]

statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#statement DataAwsIamPolicyDocument#statement}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#version DataAwsIamPolicyDocument#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.putStatement">put_statement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverrideJson">reset_override_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverridePolicyDocuments">reset_override_policy_documents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetPolicyId">reset_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetSourceJson">reset_source_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetSourcePolicyDocuments">reset_source_policy_documents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetStatement">reset_statement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_statement` <a name="put_statement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.putStatement"></a>

```python
def put_statement(
  value: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatement]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.putStatement.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_override_json` <a name="reset_override_json" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverrideJson"></a>

```python
def reset_override_json() -> None
```

##### `reset_override_policy_documents` <a name="reset_override_policy_documents" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetOverridePolicyDocuments"></a>

```python
def reset_override_policy_documents() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

##### `reset_source_json` <a name="reset_source_json" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetSourceJson"></a>

```python
def reset_source_json() -> None
```

##### `reset_source_policy_documents` <a name="reset_source_policy_documents" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetSourcePolicyDocuments"></a>

```python
def reset_source_policy_documents() -> None
```

##### `reset_statement` <a name="reset_statement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetStatement"></a>

```python
def reset_statement() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.json">json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.statement">statement</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList">DataAwsIamPolicyDocumentStatementList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overrideJsonInput">override_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overridePolicyDocumentsInput">override_policy_documents_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourceJsonInput">source_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourcePolicyDocumentsInput">source_policy_documents_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.statementInput">statement_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overrideJson">override_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overridePolicyDocuments">override_policy_documents</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourceJson">source_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourcePolicyDocuments">source_policy_documents</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.json"></a>

```python
json: str
```

- *Type:* str

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.statement"></a>

```python
statement: DataAwsIamPolicyDocumentStatementList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList">DataAwsIamPolicyDocumentStatementList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `override_json_input`<sup>Optional</sup> <a name="override_json_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overrideJsonInput"></a>

```python
override_json_input: str
```

- *Type:* str

---

##### `override_policy_documents_input`<sup>Optional</sup> <a name="override_policy_documents_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overridePolicyDocumentsInput"></a>

```python
override_policy_documents_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `source_json_input`<sup>Optional</sup> <a name="source_json_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourceJsonInput"></a>

```python
source_json_input: str
```

- *Type:* str

---

##### `source_policy_documents_input`<sup>Optional</sup> <a name="source_policy_documents_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourcePolicyDocumentsInput"></a>

```python
source_policy_documents_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `statement_input`<sup>Optional</sup> <a name="statement_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.statementInput"></a>

```python
statement_input: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatement]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>]]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `override_json`<sup>Required</sup> <a name="override_json" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overrideJson"></a>

```python
override_json: str
```

- *Type:* str

---

##### `override_policy_documents`<sup>Required</sup> <a name="override_policy_documents" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.overridePolicyDocuments"></a>

```python
override_policy_documents: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `source_json`<sup>Required</sup> <a name="source_json" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourceJson"></a>

```python
source_json: str
```

- *Type:* str

---

##### `source_policy_documents`<sup>Required</sup> <a name="source_policy_documents" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.sourcePolicyDocuments"></a>

```python
source_policy_documents: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocument.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIamPolicyDocumentConfig <a name="DataAwsIamPolicyDocumentConfig" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  override_json: str = None,
  override_policy_documents: typing.List[str] = None,
  policy_id: str = None,
  source_json: str = None,
  source_policy_documents: typing.List[str] = None,
  statement: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatement]] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#id DataAwsIamPolicyDocument#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.overrideJson">override_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_json DataAwsIamPolicyDocument#override_json}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.overridePolicyDocuments">override_policy_documents</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_policy_documents DataAwsIamPolicyDocument#override_policy_documents}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#policy_id DataAwsIamPolicyDocument#policy_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.sourceJson">source_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_json DataAwsIamPolicyDocument#source_json}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.sourcePolicyDocuments">source_policy_documents</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_policy_documents DataAwsIamPolicyDocument#source_policy_documents}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.statement">statement</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>]]</code> | statement block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#version DataAwsIamPolicyDocument#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#id DataAwsIamPolicyDocument#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `override_json`<sup>Optional</sup> <a name="override_json" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.overrideJson"></a>

```python
override_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_json DataAwsIamPolicyDocument#override_json}.

---

##### `override_policy_documents`<sup>Optional</sup> <a name="override_policy_documents" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.overridePolicyDocuments"></a>

```python
override_policy_documents: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#override_policy_documents DataAwsIamPolicyDocument#override_policy_documents}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#policy_id DataAwsIamPolicyDocument#policy_id}.

---

##### `source_json`<sup>Optional</sup> <a name="source_json" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.sourceJson"></a>

```python
source_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_json DataAwsIamPolicyDocument#source_json}.

---

##### `source_policy_documents`<sup>Optional</sup> <a name="source_policy_documents" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.sourcePolicyDocuments"></a>

```python
source_policy_documents: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#source_policy_documents DataAwsIamPolicyDocument#source_policy_documents}.

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.statement"></a>

```python
statement: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatement]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>]]

statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#statement DataAwsIamPolicyDocument#statement}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#version DataAwsIamPolicyDocument#version}.

---

### DataAwsIamPolicyDocumentStatement <a name="DataAwsIamPolicyDocumentStatement" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement(
  actions: typing.List[str] = None,
  condition: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatementCondition]] = None,
  effect: str = None,
  not_actions: typing.List[str] = None,
  not_principals: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatementNotPrincipals]] = None,
  not_resources: typing.List[str] = None,
  principals: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatementPrincipals]] = None,
  resources: typing.List[str] = None,
  sid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.actions">actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#actions DataAwsIamPolicyDocument#actions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.condition">condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a>]]</code> | condition block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.effect">effect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#effect DataAwsIamPolicyDocument#effect}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notActions">not_actions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_actions DataAwsIamPolicyDocument#not_actions}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notPrincipals">not_principals</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a>]]</code> | not_principals block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notResources">not_resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_resources DataAwsIamPolicyDocument#not_resources}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.principals">principals</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a>]]</code> | principals block. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.resources">resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#resources DataAwsIamPolicyDocument#resources}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.sid">sid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#sid DataAwsIamPolicyDocument#sid}. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#actions DataAwsIamPolicyDocument#actions}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.condition"></a>

```python
condition: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatementCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a>]]

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#condition DataAwsIamPolicyDocument#condition}

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.effect"></a>

```python
effect: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#effect DataAwsIamPolicyDocument#effect}.

---

##### `not_actions`<sup>Optional</sup> <a name="not_actions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notActions"></a>

```python
not_actions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_actions DataAwsIamPolicyDocument#not_actions}.

---

##### `not_principals`<sup>Optional</sup> <a name="not_principals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notPrincipals"></a>

```python
not_principals: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatementNotPrincipals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a>]]

not_principals block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_principals DataAwsIamPolicyDocument#not_principals}

---

##### `not_resources`<sup>Optional</sup> <a name="not_resources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.notResources"></a>

```python
not_resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#not_resources DataAwsIamPolicyDocument#not_resources}.

---

##### `principals`<sup>Optional</sup> <a name="principals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.principals"></a>

```python
principals: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatementPrincipals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a>]]

principals block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#principals DataAwsIamPolicyDocument#principals}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#resources DataAwsIamPolicyDocument#resources}.

---

##### `sid`<sup>Optional</sup> <a name="sid" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement.property.sid"></a>

```python
sid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#sid DataAwsIamPolicyDocument#sid}.

---

### DataAwsIamPolicyDocumentStatementCondition <a name="DataAwsIamPolicyDocumentStatementCondition" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition(
  test: str,
  values: typing.List[str],
  variable: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.test">test</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#test DataAwsIamPolicyDocument#test}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#values DataAwsIamPolicyDocument#values}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.variable">variable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#variable DataAwsIamPolicyDocument#variable}. |

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.test"></a>

```python
test: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#test DataAwsIamPolicyDocument#test}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#values DataAwsIamPolicyDocument#values}.

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition.property.variable"></a>

```python
variable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#variable DataAwsIamPolicyDocument#variable}.

---

### DataAwsIamPolicyDocumentStatementNotPrincipals <a name="DataAwsIamPolicyDocumentStatementNotPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals(
  identifiers: typing.List[str],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals.property.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#identifiers DataAwsIamPolicyDocument#identifiers}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#type DataAwsIamPolicyDocument#type}. |

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals.property.identifiers"></a>

```python
identifiers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#identifiers DataAwsIamPolicyDocument#identifiers}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#type DataAwsIamPolicyDocument#type}.

---

### DataAwsIamPolicyDocumentStatementPrincipals <a name="DataAwsIamPolicyDocumentStatementPrincipals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals(
  identifiers: typing.List[str],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals.property.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#identifiers DataAwsIamPolicyDocument#identifiers}. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#type DataAwsIamPolicyDocument#type}. |

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals.property.identifiers"></a>

```python
identifiers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#identifiers DataAwsIamPolicyDocument#identifiers}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_policy_document#type DataAwsIamPolicyDocument#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsIamPolicyDocumentStatementConditionList <a name="DataAwsIamPolicyDocumentStatementConditionList" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsIamPolicyDocumentStatementConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatementCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a>]]

---


### DataAwsIamPolicyDocumentStatementConditionOutputReference <a name="DataAwsIamPolicyDocumentStatementConditionOutputReference" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.testInput">test_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.variableInput">variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.test">test</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `test_input`<sup>Optional</sup> <a name="test_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.testInput"></a>

```python
test_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `variable_input`<sup>Optional</sup> <a name="variable_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.variableInput"></a>

```python
variable_input: str
```

- *Type:* str

---

##### `test`<sup>Required</sup> <a name="test" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.test"></a>

```python
test: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsIamPolicyDocumentStatementCondition, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a>, cdktf.IResolvable]

---


### DataAwsIamPolicyDocumentStatementList <a name="DataAwsIamPolicyDocumentStatementList" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsIamPolicyDocumentStatementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatement]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>]]

---


### DataAwsIamPolicyDocumentStatementNotPrincipalsList <a name="DataAwsIamPolicyDocumentStatementNotPrincipalsList" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatementNotPrincipals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a>]]

---


### DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference <a name="DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.identifiersInput">identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifiers_input`<sup>Optional</sup> <a name="identifiers_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.identifiersInput"></a>

```python
identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.identifiers"></a>

```python
identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsIamPolicyDocumentStatementNotPrincipals, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a>, cdktf.IResolvable]

---


### DataAwsIamPolicyDocumentStatementOutputReference <a name="DataAwsIamPolicyDocumentStatementOutputReference" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putNotPrincipals">put_not_principals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putPrincipals">put_principals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetEffect">reset_effect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotActions">reset_not_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotPrincipals">reset_not_principals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotResources">reset_not_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetPrincipals">reset_principals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetSid">reset_sid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putCondition"></a>

```python
def put_condition(
  value: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatementCondition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putCondition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a>]]

---

##### `put_not_principals` <a name="put_not_principals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putNotPrincipals"></a>

```python
def put_not_principals(
  value: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatementNotPrincipals]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putNotPrincipals.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a>]]

---

##### `put_principals` <a name="put_principals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putPrincipals"></a>

```python
def put_principals(
  value: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatementPrincipals]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.putPrincipals.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a>]]

---

##### `reset_actions` <a name="reset_actions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_effect` <a name="reset_effect" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetEffect"></a>

```python
def reset_effect() -> None
```

##### `reset_not_actions` <a name="reset_not_actions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotActions"></a>

```python
def reset_not_actions() -> None
```

##### `reset_not_principals` <a name="reset_not_principals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotPrincipals"></a>

```python
def reset_not_principals() -> None
```

##### `reset_not_resources` <a name="reset_not_resources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetNotResources"></a>

```python
def reset_not_resources() -> None
```

##### `reset_principals` <a name="reset_principals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetPrincipals"></a>

```python
def reset_principals() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_sid` <a name="reset_sid" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.resetSid"></a>

```python
def reset_sid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList">DataAwsIamPolicyDocumentStatementConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notPrincipals">not_principals</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList">DataAwsIamPolicyDocumentStatementNotPrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.principals">principals</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList">DataAwsIamPolicyDocumentStatementPrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.conditionInput">condition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notActionsInput">not_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notPrincipalsInput">not_principals_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notResourcesInput">not_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.principalsInput">principals_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.sidInput">sid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notActions">not_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notResources">not_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.sid">sid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.condition"></a>

```python
condition: DataAwsIamPolicyDocumentStatementConditionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementConditionList">DataAwsIamPolicyDocumentStatementConditionList</a>

---

##### `not_principals`<sup>Required</sup> <a name="not_principals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notPrincipals"></a>

```python
not_principals: DataAwsIamPolicyDocumentStatementNotPrincipalsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipalsList">DataAwsIamPolicyDocumentStatementNotPrincipalsList</a>

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.principals"></a>

```python
principals: DataAwsIamPolicyDocumentStatementPrincipalsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList">DataAwsIamPolicyDocumentStatementPrincipalsList</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.actionsInput"></a>

```python
actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.conditionInput"></a>

```python
condition_input: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatementCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementCondition">DataAwsIamPolicyDocumentStatementCondition</a>]]

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `not_actions_input`<sup>Optional</sup> <a name="not_actions_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notActionsInput"></a>

```python
not_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_principals_input`<sup>Optional</sup> <a name="not_principals_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notPrincipalsInput"></a>

```python
not_principals_input: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatementNotPrincipals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementNotPrincipals">DataAwsIamPolicyDocumentStatementNotPrincipals</a>]]

---

##### `not_resources_input`<sup>Optional</sup> <a name="not_resources_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notResourcesInput"></a>

```python
not_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principals_input`<sup>Optional</sup> <a name="principals_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.principalsInput"></a>

```python
principals_input: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatementPrincipals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a>]]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sid_input`<sup>Optional</sup> <a name="sid_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.sidInput"></a>

```python
sid_input: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `not_actions`<sup>Required</sup> <a name="not_actions" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notActions"></a>

```python
not_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_resources`<sup>Required</sup> <a name="not_resources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.notResources"></a>

```python
not_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.sid"></a>

```python
sid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsIamPolicyDocumentStatement, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatement">DataAwsIamPolicyDocumentStatement</a>, cdktf.IResolvable]

---


### DataAwsIamPolicyDocumentStatementPrincipalsList <a name="DataAwsIamPolicyDocumentStatementPrincipalsList" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsIamPolicyDocumentStatementPrincipalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsIamPolicyDocumentStatementPrincipals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a>]]

---


### DataAwsIamPolicyDocumentStatementPrincipalsOutputReference <a name="DataAwsIamPolicyDocumentStatementPrincipalsOutputReference" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_iam_policy_document

dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.identifiersInput">identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identifiers_input`<sup>Optional</sup> <a name="identifiers_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.identifiersInput"></a>

```python
identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.identifiers"></a>

```python
identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipalsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsIamPolicyDocumentStatementPrincipals, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsIamPolicyDocument.DataAwsIamPolicyDocumentStatementPrincipals">DataAwsIamPolicyDocumentStatementPrincipals</a>, cdktf.IResolvable]

---



