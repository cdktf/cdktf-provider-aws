# `macie2ClassificationExportConfiguration` Submodule <a name="`macie2ClassificationExportConfiguration` Submodule" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2ClassificationExportConfiguration <a name="Macie2ClassificationExportConfiguration" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration aws_macie2_classification_export_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer"></a>

```typescript
import { macie2ClassificationExportConfiguration } from '@cdktf/provider-aws'

new macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration(scope: Construct, id: string, config?: Macie2ClassificationExportConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig">Macie2ClassificationExportConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig">Macie2ClassificationExportConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination">putS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetS3Destination">resetS3Destination</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putS3Destination` <a name="putS3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination"></a>

```typescript
public putS3Destination(value: Macie2ClassificationExportConfigurationS3Destination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetS3Destination` <a name="resetS3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.resetS3Destination"></a>

```typescript
public resetS3Destination(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isConstruct"></a>

```typescript
import { macie2ClassificationExportConfiguration } from '@cdktf/provider-aws'

macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformElement"></a>

```typescript
import { macie2ClassificationExportConfiguration } from '@cdktf/provider-aws'

macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformResource"></a>

```typescript
import { macie2ClassificationExportConfiguration } from '@cdktf/provider-aws'

macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference">Macie2ClassificationExportConfigurationS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3DestinationInput">s3DestinationInput</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `s3Destination`<sup>Required</sup> <a name="s3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3Destination"></a>

```typescript
public readonly s3Destination: Macie2ClassificationExportConfigurationS3DestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference">Macie2ClassificationExportConfigurationS3DestinationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `s3DestinationInput`<sup>Optional</sup> <a name="s3DestinationInput" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.s3DestinationInput"></a>

```typescript
public readonly s3DestinationInput: Macie2ClassificationExportConfigurationS3Destination;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2ClassificationExportConfigurationConfig <a name="Macie2ClassificationExportConfigurationConfig" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.Initializer"></a>

```typescript
import { macie2ClassificationExportConfiguration } from '@cdktf/provider-aws'

const macie2ClassificationExportConfigurationConfig: macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#id Macie2ClassificationExportConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | s3_destination block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#id Macie2ClassificationExportConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `s3Destination`<sup>Optional</sup> <a name="s3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationConfig.property.s3Destination"></a>

```typescript
public readonly s3Destination: Macie2ClassificationExportConfigurationS3Destination;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#s3_destination Macie2ClassificationExportConfiguration#s3_destination}

---

### Macie2ClassificationExportConfigurationS3Destination <a name="Macie2ClassificationExportConfigurationS3Destination" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.Initializer"></a>

```typescript
import { macie2ClassificationExportConfiguration } from '@cdktf/provider-aws'

const macie2ClassificationExportConfigurationS3Destination: macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#bucket_name Macie2ClassificationExportConfiguration#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#kms_key_arn Macie2ClassificationExportConfiguration#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#key_prefix Macie2ClassificationExportConfiguration#key_prefix}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#bucket_name Macie2ClassificationExportConfiguration#bucket_name}.

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#kms_key_arn Macie2ClassificationExportConfiguration#kms_key_arn}.

---

##### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_export_configuration#key_prefix Macie2ClassificationExportConfiguration#key_prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### Macie2ClassificationExportConfigurationS3DestinationOutputReference <a name="Macie2ClassificationExportConfigurationS3DestinationOutputReference" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationExportConfiguration } from '@cdktf/provider-aws'

new macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resetKeyPrefix">resetKeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyPrefix` <a name="resetKeyPrefix" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.resetKeyPrefix"></a>

```typescript
public resetKeyPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefixInput">keyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `keyPrefixInput`<sup>Optional</sup> <a name="keyPrefixInput" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefixInput"></a>

```typescript
public readonly keyPrefixInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3DestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationExportConfigurationS3Destination;
```

- *Type:* <a href="#@cdktf/provider-aws.macie2ClassificationExportConfiguration.Macie2ClassificationExportConfigurationS3Destination">Macie2ClassificationExportConfigurationS3Destination</a>

---



