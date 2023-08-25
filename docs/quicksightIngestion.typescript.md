# `aws_quicksight_ingestion`

Refer to the Terraform Registory for docs: [`aws_quicksight_ingestion`](https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/quicksight_ingestion).

# `quicksightIngestion` Submodule <a name="`quicksightIngestion` Submodule" id="@cdktf/provider-aws.quicksightIngestion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightIngestion <a name="QuicksightIngestion" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/quicksight_ingestion aws_quicksight_ingestion}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.Initializer"></a>

```typescript
import { quicksightIngestion } from '@cdktf/provider-aws'

new quicksightIngestion.QuicksightIngestion(scope: Construct, id: string, config: QuicksightIngestionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig">QuicksightIngestionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig">QuicksightIngestionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.resetAwsAccountId"></a>

```typescript
public resetAwsAccountId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.isConstruct"></a>

```typescript
import { quicksightIngestion } from '@cdktf/provider-aws'

quicksightIngestion.QuicksightIngestion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.isTerraformElement"></a>

```typescript
import { quicksightIngestion } from '@cdktf/provider-aws'

quicksightIngestion.QuicksightIngestion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.isTerraformResource"></a>

```typescript
import { quicksightIngestion } from '@cdktf/provider-aws'

quicksightIngestion.QuicksightIngestion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.ingestionStatus">ingestionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.dataSetIdInput">dataSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.ingestionIdInput">ingestionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.ingestionTypeInput">ingestionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.dataSetId">dataSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.ingestionId">ingestionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.ingestionType">ingestionType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingestionStatus`<sup>Required</sup> <a name="ingestionStatus" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.ingestionStatus"></a>

```typescript
public readonly ingestionStatus: string;
```

- *Type:* string

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `dataSetIdInput`<sup>Optional</sup> <a name="dataSetIdInput" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.dataSetIdInput"></a>

```typescript
public readonly dataSetIdInput: string;
```

- *Type:* string

---

##### `ingestionIdInput`<sup>Optional</sup> <a name="ingestionIdInput" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.ingestionIdInput"></a>

```typescript
public readonly ingestionIdInput: string;
```

- *Type:* string

---

##### `ingestionTypeInput`<sup>Optional</sup> <a name="ingestionTypeInput" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.ingestionTypeInput"></a>

```typescript
public readonly ingestionTypeInput: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

---

##### `ingestionId`<sup>Required</sup> <a name="ingestionId" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.ingestionId"></a>

```typescript
public readonly ingestionId: string;
```

- *Type:* string

---

##### `ingestionType`<sup>Required</sup> <a name="ingestionType" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.ingestionType"></a>

```typescript
public readonly ingestionType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightIngestionConfig <a name="QuicksightIngestionConfig" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.Initializer"></a>

```typescript
import { quicksightIngestion } from '@cdktf/provider-aws'

const quicksightIngestionConfig: quicksightIngestion.QuicksightIngestionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.dataSetId">dataSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/quicksight_ingestion#data_set_id QuicksightIngestion#data_set_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.ingestionId">ingestionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/quicksight_ingestion#ingestion_id QuicksightIngestion#ingestion_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.ingestionType">ingestionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/quicksight_ingestion#ingestion_type QuicksightIngestion#ingestion_type}. |
| <code><a href="#@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/quicksight_ingestion#aws_account_id QuicksightIngestion#aws_account_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSetId`<sup>Required</sup> <a name="dataSetId" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.dataSetId"></a>

```typescript
public readonly dataSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/quicksight_ingestion#data_set_id QuicksightIngestion#data_set_id}.

---

##### `ingestionId`<sup>Required</sup> <a name="ingestionId" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.ingestionId"></a>

```typescript
public readonly ingestionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/quicksight_ingestion#ingestion_id QuicksightIngestion#ingestion_id}.

---

##### `ingestionType`<sup>Required</sup> <a name="ingestionType" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.ingestionType"></a>

```typescript
public readonly ingestionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/quicksight_ingestion#ingestion_type QuicksightIngestion#ingestion_type}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightIngestion.QuicksightIngestionConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/quicksight_ingestion#aws_account_id QuicksightIngestion#aws_account_id}.

---



