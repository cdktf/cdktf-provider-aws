# `dataAwsApprunnerHostedZoneId` Submodule <a name="`dataAwsApprunnerHostedZoneId` Submodule" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApprunnerHostedZoneId <a name="DataAwsApprunnerHostedZoneId" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/apprunner_hosted_zone_id aws_apprunner_hosted_zone_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.Initializer"></a>

```typescript
import { dataAwsApprunnerHostedZoneId } from '@cdktf/provider-aws'

new dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId(scope: Construct, id: string, config?: DataAwsApprunnerHostedZoneIdConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig">DataAwsApprunnerHostedZoneIdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig">DataAwsApprunnerHostedZoneIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsApprunnerHostedZoneId resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isConstruct"></a>

```typescript
import { dataAwsApprunnerHostedZoneId } from '@cdktf/provider-aws'

dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isTerraformElement"></a>

```typescript
import { dataAwsApprunnerHostedZoneId } from '@cdktf/provider-aws'

dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isTerraformDataSource"></a>

```typescript
import { dataAwsApprunnerHostedZoneId } from '@cdktf/provider-aws'

dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.generateConfigForImport"></a>

```typescript
import { dataAwsApprunnerHostedZoneId } from '@cdktf/provider-aws'

dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsApprunnerHostedZoneId resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsApprunnerHostedZoneId to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsApprunnerHostedZoneId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/apprunner_hosted_zone_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsApprunnerHostedZoneId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneId.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApprunnerHostedZoneIdConfig <a name="DataAwsApprunnerHostedZoneIdConfig" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.Initializer"></a>

```typescript
import { dataAwsApprunnerHostedZoneId } from '@cdktf/provider-aws'

const dataAwsApprunnerHostedZoneIdConfig: dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/apprunner_hosted_zone_id#region DataAwsApprunnerHostedZoneId#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsApprunnerHostedZoneId.DataAwsApprunnerHostedZoneIdConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.97.0/docs/data-sources/apprunner_hosted_zone_id#region DataAwsApprunnerHostedZoneId#region}.

---



