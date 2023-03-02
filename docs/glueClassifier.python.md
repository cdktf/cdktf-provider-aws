# `glueClassifier` Submodule <a name="`glueClassifier` Submodule" id="@cdktf/provider-aws.glueClassifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueClassifier <a name="GlueClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier aws_glue_classifier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_classifier

glueClassifier.GlueClassifier(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  csv_classifier: GlueClassifierCsvClassifier = None,
  grok_classifier: GlueClassifierGrokClassifier = None,
  id: str = None,
  json_classifier: GlueClassifierJsonClassifier = None,
  xml_classifier: GlueClassifierXmlClassifier = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#name GlueClassifier#name}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.csvClassifier">csv_classifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | csv_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.grokClassifier">grok_classifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | grok_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#id GlueClassifier#id}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.jsonClassifier">json_classifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | json_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.xmlClassifier">xml_classifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | xml_classifier block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#name GlueClassifier#name}.

---

##### `csv_classifier`<sup>Optional</sup> <a name="csv_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.csvClassifier"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

csv_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#csv_classifier GlueClassifier#csv_classifier}

---

##### `grok_classifier`<sup>Optional</sup> <a name="grok_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.grokClassifier"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

grok_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_classifier GlueClassifier#grok_classifier}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#id GlueClassifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `json_classifier`<sup>Optional</sup> <a name="json_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.jsonClassifier"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

json_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_classifier GlueClassifier#json_classifier}

---

##### `xml_classifier`<sup>Optional</sup> <a name="xml_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.Initializer.parameter.xmlClassifier"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

xml_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#xml_classifier GlueClassifier#xml_classifier}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier">put_csv_classifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier">put_grok_classifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putJsonClassifier">put_json_classifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.putXmlClassifier">put_xml_classifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetCsvClassifier">reset_csv_classifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetGrokClassifier">reset_grok_classifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetJsonClassifier">reset_json_classifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.resetXmlClassifier">reset_xml_classifier</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_csv_classifier` <a name="put_csv_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier"></a>

```python
def put_csv_classifier(
  allow_single_column: typing.Union[bool, IResolvable] = None,
  contains_header: str = None,
  custom_datatype_configured: typing.Union[bool, IResolvable] = None,
  custom_datatypes: typing.List[str] = None,
  delimiter: str = None,
  disable_value_trimming: typing.Union[bool, IResolvable] = None,
  header: typing.List[str] = None,
  quote_symbol: str = None
) -> None
```

###### `allow_single_column`<sup>Optional</sup> <a name="allow_single_column" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier.parameter.allowSingleColumn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#allow_single_column GlueClassifier#allow_single_column}.

---

###### `contains_header`<sup>Optional</sup> <a name="contains_header" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier.parameter.containsHeader"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#contains_header GlueClassifier#contains_header}.

---

###### `custom_datatype_configured`<sup>Optional</sup> <a name="custom_datatype_configured" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier.parameter.customDatatypeConfigured"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}.

---

###### `custom_datatypes`<sup>Optional</sup> <a name="custom_datatypes" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier.parameter.customDatatypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatypes GlueClassifier#custom_datatypes}.

---

###### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier.parameter.delimiter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#delimiter GlueClassifier#delimiter}.

---

###### `disable_value_trimming`<sup>Optional</sup> <a name="disable_value_trimming" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier.parameter.disableValueTrimming"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}.

---

###### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier.parameter.header"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#header GlueClassifier#header}.

---

###### `quote_symbol`<sup>Optional</sup> <a name="quote_symbol" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putCsvClassifier.parameter.quoteSymbol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#quote_symbol GlueClassifier#quote_symbol}.

---

##### `put_grok_classifier` <a name="put_grok_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier"></a>

```python
def put_grok_classifier(
  classification: str,
  grok_pattern: str,
  custom_patterns: str = None
) -> None
```

###### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier.parameter.classification"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}.

---

###### `grok_pattern`<sup>Required</sup> <a name="grok_pattern" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier.parameter.grokPattern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_pattern GlueClassifier#grok_pattern}.

---

###### `custom_patterns`<sup>Optional</sup> <a name="custom_patterns" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putGrokClassifier.parameter.customPatterns"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_patterns GlueClassifier#custom_patterns}.

---

##### `put_json_classifier` <a name="put_json_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putJsonClassifier"></a>

```python
def put_json_classifier(
  json_path: str
) -> None
```

###### `json_path`<sup>Required</sup> <a name="json_path" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putJsonClassifier.parameter.jsonPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_path GlueClassifier#json_path}.

---

##### `put_xml_classifier` <a name="put_xml_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putXmlClassifier"></a>

```python
def put_xml_classifier(
  classification: str,
  row_tag: str
) -> None
```

###### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putXmlClassifier.parameter.classification"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}.

---

###### `row_tag`<sup>Required</sup> <a name="row_tag" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.putXmlClassifier.parameter.rowTag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#row_tag GlueClassifier#row_tag}.

---

##### `reset_csv_classifier` <a name="reset_csv_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetCsvClassifier"></a>

```python
def reset_csv_classifier() -> None
```

##### `reset_grok_classifier` <a name="reset_grok_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetGrokClassifier"></a>

```python
def reset_grok_classifier() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_json_classifier` <a name="reset_json_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetJsonClassifier"></a>

```python
def reset_json_classifier() -> None
```

##### `reset_xml_classifier` <a name="reset_xml_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.resetXmlClassifier"></a>

```python
def reset_xml_classifier() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import glue_classifier

glueClassifier.GlueClassifier.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import glue_classifier

glueClassifier.GlueClassifier.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import glue_classifier

glueClassifier.GlueClassifier.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifier">csv_classifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifier">grok_classifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifier">json_classifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifier">xml_classifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifierInput">csv_classifier_input</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifierInput">grok_classifier_input</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifierInput">json_classifier_input</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifierInput">xml_classifier_input</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `csv_classifier`<sup>Required</sup> <a name="csv_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifier"></a>

```python
csv_classifier: GlueClassifierCsvClassifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a>

---

##### `grok_classifier`<sup>Required</sup> <a name="grok_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifier"></a>

```python
grok_classifier: GlueClassifierGrokClassifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a>

---

##### `json_classifier`<sup>Required</sup> <a name="json_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifier"></a>

```python
json_classifier: GlueClassifierJsonClassifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a>

---

##### `xml_classifier`<sup>Required</sup> <a name="xml_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifier"></a>

```python
xml_classifier: GlueClassifierXmlClassifierOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a>

---

##### `csv_classifier_input`<sup>Optional</sup> <a name="csv_classifier_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.csvClassifierInput"></a>

```python
csv_classifier_input: GlueClassifierCsvClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---

##### `grok_classifier_input`<sup>Optional</sup> <a name="grok_classifier_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.grokClassifierInput"></a>

```python
grok_classifier_input: GlueClassifierGrokClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `json_classifier_input`<sup>Optional</sup> <a name="json_classifier_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.jsonClassifierInput"></a>

```python
json_classifier_input: GlueClassifierJsonClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `xml_classifier_input`<sup>Optional</sup> <a name="xml_classifier_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.xmlClassifierInput"></a>

```python
xml_classifier_input: GlueClassifierXmlClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifier.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueClassifier.GlueClassifier.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueClassifierConfig <a name="GlueClassifierConfig" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_classifier

glueClassifier.GlueClassifierConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  csv_classifier: GlueClassifierCsvClassifier = None,
  grok_classifier: GlueClassifierGrokClassifier = None,
  id: str = None,
  json_classifier: GlueClassifierJsonClassifier = None,
  xml_classifier: GlueClassifierXmlClassifier = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#name GlueClassifier#name}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.csvClassifier">csv_classifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | csv_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.grokClassifier">grok_classifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | grok_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#id GlueClassifier#id}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.jsonClassifier">json_classifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | json_classifier block. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.xmlClassifier">xml_classifier</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | xml_classifier block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#name GlueClassifier#name}.

---

##### `csv_classifier`<sup>Optional</sup> <a name="csv_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.csvClassifier"></a>

```python
csv_classifier: GlueClassifierCsvClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

csv_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#csv_classifier GlueClassifier#csv_classifier}

---

##### `grok_classifier`<sup>Optional</sup> <a name="grok_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.grokClassifier"></a>

```python
grok_classifier: GlueClassifierGrokClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

grok_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_classifier GlueClassifier#grok_classifier}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#id GlueClassifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `json_classifier`<sup>Optional</sup> <a name="json_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.jsonClassifier"></a>

```python
json_classifier: GlueClassifierJsonClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

json_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_classifier GlueClassifier#json_classifier}

---

##### `xml_classifier`<sup>Optional</sup> <a name="xml_classifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierConfig.property.xmlClassifier"></a>

```python
xml_classifier: GlueClassifierXmlClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

xml_classifier block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#xml_classifier GlueClassifier#xml_classifier}

---

### GlueClassifierCsvClassifier <a name="GlueClassifierCsvClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_classifier

glueClassifier.GlueClassifierCsvClassifier(
  allow_single_column: typing.Union[bool, IResolvable] = None,
  contains_header: str = None,
  custom_datatype_configured: typing.Union[bool, IResolvable] = None,
  custom_datatypes: typing.List[str] = None,
  delimiter: str = None,
  disable_value_trimming: typing.Union[bool, IResolvable] = None,
  header: typing.List[str] = None,
  quote_symbol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn">allow_single_column</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#allow_single_column GlueClassifier#allow_single_column}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader">contains_header</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#contains_header GlueClassifier#contains_header}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured">custom_datatype_configured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypes">custom_datatypes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatypes GlueClassifier#custom_datatypes}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.delimiter">delimiter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#delimiter GlueClassifier#delimiter}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming">disable_value_trimming</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.header">header</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#header GlueClassifier#header}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol">quote_symbol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#quote_symbol GlueClassifier#quote_symbol}. |

---

##### `allow_single_column`<sup>Optional</sup> <a name="allow_single_column" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn"></a>

```python
allow_single_column: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#allow_single_column GlueClassifier#allow_single_column}.

---

##### `contains_header`<sup>Optional</sup> <a name="contains_header" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader"></a>

```python
contains_header: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#contains_header GlueClassifier#contains_header}.

---

##### `custom_datatype_configured`<sup>Optional</sup> <a name="custom_datatype_configured" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured"></a>

```python
custom_datatype_configured: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}.

---

##### `custom_datatypes`<sup>Optional</sup> <a name="custom_datatypes" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypes"></a>

```python
custom_datatypes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_datatypes GlueClassifier#custom_datatypes}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#delimiter GlueClassifier#delimiter}.

---

##### `disable_value_trimming`<sup>Optional</sup> <a name="disable_value_trimming" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming"></a>

```python
disable_value_trimming: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.header"></a>

```python
header: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#header GlueClassifier#header}.

---

##### `quote_symbol`<sup>Optional</sup> <a name="quote_symbol" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol"></a>

```python
quote_symbol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#quote_symbol GlueClassifier#quote_symbol}.

---

### GlueClassifierGrokClassifier <a name="GlueClassifierGrokClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_classifier

glueClassifier.GlueClassifierGrokClassifier(
  classification: str,
  grok_pattern: str,
  custom_patterns: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.classification">classification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern">grok_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_pattern GlueClassifier#grok_pattern}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns">custom_patterns</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_patterns GlueClassifier#custom_patterns}. |

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.classification"></a>

```python
classification: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}.

---

##### `grok_pattern`<sup>Required</sup> <a name="grok_pattern" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern"></a>

```python
grok_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#grok_pattern GlueClassifier#grok_pattern}.

---

##### `custom_patterns`<sup>Optional</sup> <a name="custom_patterns" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns"></a>

```python
custom_patterns: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#custom_patterns GlueClassifier#custom_patterns}.

---

### GlueClassifierJsonClassifier <a name="GlueClassifierJsonClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_classifier

glueClassifier.GlueClassifierJsonClassifier(
  json_path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath">json_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_path GlueClassifier#json_path}. |

---

##### `json_path`<sup>Required</sup> <a name="json_path" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath"></a>

```python
json_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#json_path GlueClassifier#json_path}.

---

### GlueClassifierXmlClassifier <a name="GlueClassifierXmlClassifier" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_classifier

glueClassifier.GlueClassifierXmlClassifier(
  classification: str,
  row_tag: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.classification">classification</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.rowTag">row_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#row_tag GlueClassifier#row_tag}. |

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.classification"></a>

```python
classification: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#classification GlueClassifier#classification}.

---

##### `row_tag`<sup>Required</sup> <a name="row_tag" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier.property.rowTag"></a>

```python
row_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier#row_tag GlueClassifier#row_tag}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueClassifierCsvClassifierOutputReference <a name="GlueClassifierCsvClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_classifier

glueClassifier.GlueClassifierCsvClassifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn">reset_allow_single_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader">reset_contains_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured">reset_custom_datatype_configured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypes">reset_custom_datatypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter">reset_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming">reset_disable_value_trimming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol">reset_quote_symbol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_single_column` <a name="reset_allow_single_column" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn"></a>

```python
def reset_allow_single_column() -> None
```

##### `reset_contains_header` <a name="reset_contains_header" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader"></a>

```python
def reset_contains_header() -> None
```

##### `reset_custom_datatype_configured` <a name="reset_custom_datatype_configured" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured"></a>

```python
def reset_custom_datatype_configured() -> None
```

##### `reset_custom_datatypes` <a name="reset_custom_datatypes" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypes"></a>

```python
def reset_custom_datatypes() -> None
```

##### `reset_delimiter` <a name="reset_delimiter" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```

##### `reset_disable_value_trimming` <a name="reset_disable_value_trimming" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming"></a>

```python
def reset_disable_value_trimming() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_quote_symbol` <a name="reset_quote_symbol" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol"></a>

```python
def reset_quote_symbol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput">allow_single_column_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput">contains_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput">custom_datatype_configured_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypesInput">custom_datatypes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput">disable_value_trimming_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput">header_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput">quote_symbol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn">allow_single_column</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader">contains_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured">custom_datatype_configured</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypes">custom_datatypes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming">disable_value_trimming</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header">header</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol">quote_symbol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_single_column_input`<sup>Optional</sup> <a name="allow_single_column_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput"></a>

```python
allow_single_column_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `contains_header_input`<sup>Optional</sup> <a name="contains_header_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput"></a>

```python
contains_header_input: str
```

- *Type:* str

---

##### `custom_datatype_configured_input`<sup>Optional</sup> <a name="custom_datatype_configured_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput"></a>

```python
custom_datatype_configured_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_datatypes_input`<sup>Optional</sup> <a name="custom_datatypes_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypesInput"></a>

```python
custom_datatypes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `disable_value_trimming_input`<sup>Optional</sup> <a name="disable_value_trimming_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput"></a>

```python
disable_value_trimming_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput"></a>

```python
header_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quote_symbol_input`<sup>Optional</sup> <a name="quote_symbol_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput"></a>

```python
quote_symbol_input: str
```

- *Type:* str

---

##### `allow_single_column`<sup>Required</sup> <a name="allow_single_column" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn"></a>

```python
allow_single_column: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `contains_header`<sup>Required</sup> <a name="contains_header" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader"></a>

```python
contains_header: str
```

- *Type:* str

---

##### `custom_datatype_configured`<sup>Required</sup> <a name="custom_datatype_configured" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured"></a>

```python
custom_datatype_configured: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_datatypes`<sup>Required</sup> <a name="custom_datatypes" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypes"></a>

```python
custom_datatypes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `disable_value_trimming`<sup>Required</sup> <a name="disable_value_trimming" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming"></a>

```python
disable_value_trimming: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header"></a>

```python
header: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `quote_symbol`<sup>Required</sup> <a name="quote_symbol" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol"></a>

```python
quote_symbol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue"></a>

```python
internal_value: GlueClassifierCsvClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---


### GlueClassifierGrokClassifierOutputReference <a name="GlueClassifierGrokClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_classifier

glueClassifier.GlueClassifierGrokClassifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns">reset_custom_patterns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_patterns` <a name="reset_custom_patterns" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns"></a>

```python
def reset_custom_patterns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput">classification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput">custom_patterns_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput">grok_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification">classification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns">custom_patterns</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern">grok_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classification_input`<sup>Optional</sup> <a name="classification_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput"></a>

```python
classification_input: str
```

- *Type:* str

---

##### `custom_patterns_input`<sup>Optional</sup> <a name="custom_patterns_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput"></a>

```python
custom_patterns_input: str
```

- *Type:* str

---

##### `grok_pattern_input`<sup>Optional</sup> <a name="grok_pattern_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput"></a>

```python
grok_pattern_input: str
```

- *Type:* str

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification"></a>

```python
classification: str
```

- *Type:* str

---

##### `custom_patterns`<sup>Required</sup> <a name="custom_patterns" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns"></a>

```python
custom_patterns: str
```

- *Type:* str

---

##### `grok_pattern`<sup>Required</sup> <a name="grok_pattern" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern"></a>

```python
grok_pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue"></a>

```python
internal_value: GlueClassifierGrokClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---


### GlueClassifierJsonClassifierOutputReference <a name="GlueClassifierJsonClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_classifier

glueClassifier.GlueClassifierJsonClassifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput">json_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath">json_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_path_input`<sup>Optional</sup> <a name="json_path_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput"></a>

```python
json_path_input: str
```

- *Type:* str

---

##### `json_path`<sup>Required</sup> <a name="json_path" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath"></a>

```python
json_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue"></a>

```python
internal_value: GlueClassifierJsonClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---


### GlueClassifierXmlClassifierOutputReference <a name="GlueClassifierXmlClassifierOutputReference" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_classifier

glueClassifier.GlueClassifierXmlClassifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput">classification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput">row_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification">classification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag">row_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classification_input`<sup>Optional</sup> <a name="classification_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput"></a>

```python
classification_input: str
```

- *Type:* str

---

##### `row_tag_input`<sup>Optional</sup> <a name="row_tag_input" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput"></a>

```python
row_tag_input: str
```

- *Type:* str

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification"></a>

```python
classification: str
```

- *Type:* str

---

##### `row_tag`<sup>Required</sup> <a name="row_tag" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag"></a>

```python
row_tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue"></a>

```python
internal_value: GlueClassifierXmlClassifier
```

- *Type:* <a href="#@cdktf/provider-aws.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---



