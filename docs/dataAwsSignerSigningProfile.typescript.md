# `dataAwsSignerSigningProfile` Submodule <a name="`dataAwsSignerSigningProfile` Submodule" id="@cdktf/provider-aws.dataAwsSignerSigningProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSignerSigningProfile <a name="DataAwsSignerSigningProfile" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile aws_signer_signing_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.Initializer"></a>

```typescript
import { dataAwsSignerSigningProfile } from '@cdktf/provider-aws'

new dataAwsSignerSigningProfile.DataAwsSignerSigningProfile(scope: Construct, id: string, config: DataAwsSignerSigningProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig">DataAwsSignerSigningProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig">DataAwsSignerSigningProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.isConstruct"></a>

```typescript
import { dataAwsSignerSigningProfile } from '@cdktf/provider-aws'

dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.isTerraformElement"></a>

```typescript
import { dataAwsSignerSigningProfile } from '@cdktf/provider-aws'

dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.isTerraformDataSource"></a>

```typescript
import { dataAwsSignerSigningProfile } from '@cdktf/provider-aws'

dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.platformDisplayName">platformDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.platformId">platformId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.revocationRecord">revocationRecord</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList">DataAwsSignerSigningProfileRevocationRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.signatureValidityPeriod">signatureValidityPeriod</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList">DataAwsSignerSigningProfileSignatureValidityPeriodList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.versionArn">versionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `platformDisplayName`<sup>Required</sup> <a name="platformDisplayName" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.platformDisplayName"></a>

```typescript
public readonly platformDisplayName: string;
```

- *Type:* string

---

##### `platformId`<sup>Required</sup> <a name="platformId" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.platformId"></a>

```typescript
public readonly platformId: string;
```

- *Type:* string

---

##### `revocationRecord`<sup>Required</sup> <a name="revocationRecord" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.revocationRecord"></a>

```typescript
public readonly revocationRecord: DataAwsSignerSigningProfileRevocationRecordList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList">DataAwsSignerSigningProfileRevocationRecordList</a>

---

##### `signatureValidityPeriod`<sup>Required</sup> <a name="signatureValidityPeriod" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.signatureValidityPeriod"></a>

```typescript
public readonly signatureValidityPeriod: DataAwsSignerSigningProfileSignatureValidityPeriodList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList">DataAwsSignerSigningProfileSignatureValidityPeriodList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `versionArn`<sup>Required</sup> <a name="versionArn" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.versionArn"></a>

```typescript
public readonly versionArn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSignerSigningProfileConfig <a name="DataAwsSignerSigningProfileConfig" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.Initializer"></a>

```typescript
import { dataAwsSignerSigningProfile } from '@cdktf/provider-aws'

const dataAwsSignerSigningProfileConfig: dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile#name DataAwsSignerSigningProfile#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile#id DataAwsSignerSigningProfile#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile#tags DataAwsSignerSigningProfile#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile#name DataAwsSignerSigningProfile#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile#id DataAwsSignerSigningProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile#tags DataAwsSignerSigningProfile#tags}.

---

### DataAwsSignerSigningProfileRevocationRecord <a name="DataAwsSignerSigningProfileRevocationRecord" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecord.Initializer"></a>

```typescript
import { dataAwsSignerSigningProfile } from '@cdktf/provider-aws'

const dataAwsSignerSigningProfileRevocationRecord: dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecord = { ... }
```


### DataAwsSignerSigningProfileSignatureValidityPeriod <a name="DataAwsSignerSigningProfileSignatureValidityPeriod" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriod.Initializer"></a>

```typescript
import { dataAwsSignerSigningProfile } from '@cdktf/provider-aws'

const dataAwsSignerSigningProfileSignatureValidityPeriod: dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriod = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSignerSigningProfileRevocationRecordList <a name="DataAwsSignerSigningProfileRevocationRecordList" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.Initializer"></a>

```typescript
import { dataAwsSignerSigningProfile } from '@cdktf/provider-aws'

new dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.get"></a>

```typescript
public get(index: number): DataAwsSignerSigningProfileRevocationRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSignerSigningProfileRevocationRecordOutputReference <a name="DataAwsSignerSigningProfileRevocationRecordOutputReference" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.Initializer"></a>

```typescript
import { dataAwsSignerSigningProfile } from '@cdktf/provider-aws'

new dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.property.revocationEffectiveFrom">revocationEffectiveFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.property.revokedAt">revokedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.property.revokedBy">revokedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecord">DataAwsSignerSigningProfileRevocationRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revocationEffectiveFrom`<sup>Required</sup> <a name="revocationEffectiveFrom" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.property.revocationEffectiveFrom"></a>

```typescript
public readonly revocationEffectiveFrom: string;
```

- *Type:* string

---

##### `revokedAt`<sup>Required</sup> <a name="revokedAt" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.property.revokedAt"></a>

```typescript
public readonly revokedAt: string;
```

- *Type:* string

---

##### `revokedBy`<sup>Required</sup> <a name="revokedBy" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.property.revokedBy"></a>

```typescript
public readonly revokedBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSignerSigningProfileRevocationRecord;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileRevocationRecord">DataAwsSignerSigningProfileRevocationRecord</a>

---


### DataAwsSignerSigningProfileSignatureValidityPeriodList <a name="DataAwsSignerSigningProfileSignatureValidityPeriodList" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.Initializer"></a>

```typescript
import { dataAwsSignerSigningProfile } from '@cdktf/provider-aws'

new dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.get"></a>

```typescript
public get(index: number): DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference <a name="DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.Initializer"></a>

```typescript
import { dataAwsSignerSigningProfile } from '@cdktf/provider-aws'

new dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriod">DataAwsSignerSigningProfileSignatureValidityPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSignerSigningProfileSignatureValidityPeriod;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSignerSigningProfile.DataAwsSignerSigningProfileSignatureValidityPeriod">DataAwsSignerSigningProfileSignatureValidityPeriod</a>

---



