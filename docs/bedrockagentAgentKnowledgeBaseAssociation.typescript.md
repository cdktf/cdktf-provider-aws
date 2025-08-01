# `bedrockagentAgentKnowledgeBaseAssociation` Submodule <a name="`bedrockagentAgentKnowledgeBaseAssociation` Submodule" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentAgentKnowledgeBaseAssociation <a name="BedrockagentAgentKnowledgeBaseAssociation" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/bedrockagent_agent_knowledge_base_association aws_bedrockagent_agent_knowledge_base_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer"></a>

```typescript
import { bedrockagentAgentKnowledgeBaseAssociation } from '@cdktf/provider-aws'

new bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation(scope: Construct, id: string, config: BedrockagentAgentKnowledgeBaseAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig">BedrockagentAgentKnowledgeBaseAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig">BedrockagentAgentKnowledgeBaseAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetAgentVersion">resetAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: BedrockagentAgentKnowledgeBaseAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts">BedrockagentAgentKnowledgeBaseAssociationTimeouts</a>

---

##### `resetAgentVersion` <a name="resetAgentVersion" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetAgentVersion"></a>

```typescript
public resetAgentVersion(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentAgentKnowledgeBaseAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isConstruct"></a>

```typescript
import { bedrockagentAgentKnowledgeBaseAssociation } from '@cdktf/provider-aws'

bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformElement"></a>

```typescript
import { bedrockagentAgentKnowledgeBaseAssociation } from '@cdktf/provider-aws'

bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformResource"></a>

```typescript
import { bedrockagentAgentKnowledgeBaseAssociation } from '@cdktf/provider-aws'

bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport"></a>

```typescript
import { bedrockagentAgentKnowledgeBaseAssociation } from '@cdktf/provider-aws'

bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BedrockagentAgentKnowledgeBaseAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentAgentKnowledgeBaseAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentAgentKnowledgeBaseAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/bedrockagent_agent_knowledge_base_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentAgentKnowledgeBaseAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference">BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentIdInput">agentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentVersionInput">agentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseIdInput">knowledgeBaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseStateInput">knowledgeBaseStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts">BedrockagentAgentKnowledgeBaseAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentVersion">agentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseState">knowledgeBaseState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference">BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference</a>

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentIdInput"></a>

```typescript
public readonly agentIdInput: string;
```

- *Type:* string

---

##### `agentVersionInput`<sup>Optional</sup> <a name="agentVersionInput" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentVersionInput"></a>

```typescript
public readonly agentVersionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `knowledgeBaseIdInput`<sup>Optional</sup> <a name="knowledgeBaseIdInput" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseIdInput"></a>

```typescript
public readonly knowledgeBaseIdInput: string;
```

- *Type:* string

---

##### `knowledgeBaseStateInput`<sup>Optional</sup> <a name="knowledgeBaseStateInput" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseStateInput"></a>

```typescript
public readonly knowledgeBaseStateInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BedrockagentAgentKnowledgeBaseAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts">BedrockagentAgentKnowledgeBaseAssociationTimeouts</a>

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

---

##### `knowledgeBaseState`<sup>Required</sup> <a name="knowledgeBaseState" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.knowledgeBaseState"></a>

```typescript
public readonly knowledgeBaseState: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentAgentKnowledgeBaseAssociationConfig <a name="BedrockagentAgentKnowledgeBaseAssociationConfig" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.Initializer"></a>

```typescript
import { bedrockagentAgentKnowledgeBaseAssociation } from '@cdktf/provider-aws'

const bedrockagentAgentKnowledgeBaseAssociationConfig: bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.agentId">agentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_id BedrockagentAgentKnowledgeBaseAssociation#agent_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/bedrockagent_agent_knowledge_base_association#description BedrockagentAgentKnowledgeBaseAssociation#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.knowledgeBaseId">knowledgeBaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_id BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.knowledgeBaseState">knowledgeBaseState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_state BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_state}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.agentVersion">agentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_version BedrockagentAgentKnowledgeBaseAssociation#agent_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts">BedrockagentAgentKnowledgeBaseAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_id BedrockagentAgentKnowledgeBaseAssociation#agent_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/bedrockagent_agent_knowledge_base_association#description BedrockagentAgentKnowledgeBaseAssociation#description}.

---

##### `knowledgeBaseId`<sup>Required</sup> <a name="knowledgeBaseId" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.knowledgeBaseId"></a>

```typescript
public readonly knowledgeBaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_id BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_id}.

---

##### `knowledgeBaseState`<sup>Required</sup> <a name="knowledgeBaseState" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.knowledgeBaseState"></a>

```typescript
public readonly knowledgeBaseState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/bedrockagent_agent_knowledge_base_association#knowledge_base_state BedrockagentAgentKnowledgeBaseAssociation#knowledge_base_state}.

---

##### `agentVersion`<sup>Optional</sup> <a name="agentVersion" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/bedrockagent_agent_knowledge_base_association#agent_version BedrockagentAgentKnowledgeBaseAssociation#agent_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/bedrockagent_agent_knowledge_base_association#region BedrockagentAgentKnowledgeBaseAssociation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentAgentKnowledgeBaseAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts">BedrockagentAgentKnowledgeBaseAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/bedrockagent_agent_knowledge_base_association#timeouts BedrockagentAgentKnowledgeBaseAssociation#timeouts}

---

### BedrockagentAgentKnowledgeBaseAssociationTimeouts <a name="BedrockagentAgentKnowledgeBaseAssociationTimeouts" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts.Initializer"></a>

```typescript
import { bedrockagentAgentKnowledgeBaseAssociation } from '@cdktf/provider-aws'

const bedrockagentAgentKnowledgeBaseAssociationTimeouts: bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/bedrockagent_agent_knowledge_base_association#create BedrockagentAgentKnowledgeBaseAssociation#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/bedrockagent_agent_knowledge_base_association#update BedrockagentAgentKnowledgeBaseAssociation#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference <a name="BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { bedrockagentAgentKnowledgeBaseAssociation } from '@cdktf/provider-aws'

new bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts">BedrockagentAgentKnowledgeBaseAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentAgentKnowledgeBaseAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentAgentKnowledgeBaseAssociation.BedrockagentAgentKnowledgeBaseAssociationTimeouts">BedrockagentAgentKnowledgeBaseAssociationTimeouts</a>

---



